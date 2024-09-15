import { promises as fs } from "fs";
import { DateTime } from "luxon";
import fetch from "cross-fetch";
import { GlobalArgsImpl } from "./globalArgs";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {
  Refresh_TokenMutation,
  Refresh_TokenMutationVariables,
} from "./graphql/graphql";
import { credentialsPath } from "./dirs";
import { gql } from "./graphql";
import { CamelToSnakeCaseNested } from "./utils";

const EXPIRATION_PADDING_SEC = 60;

export interface Credentials {
  clientId: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

class CredentialsClass implements Credentials {
  clientId: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: string;

  constructor(data: CamelToSnakeCaseNested<Credentials>) {
    this.clientId = data.client_id;
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;
    this.expiresAt = data.expires_at;
  }
}

export interface CredentialsFile {
  credentials: Record<string, CamelToSnakeCaseNested<Credentials>>;
}

const REFRESH_TOKEN = gql(`
  mutation REFRESH_TOKEN($clientId: String!, $refreshToken: String!) {
    oauth2Refresh(input: { clientId: $clientId, refreshToken: $refreshToken }) {
      clientError
      unauthorized
      issued {
        expiresIn
        accessToken
        refreshToken
      }
    }
  }
`);

const aqoraUrl = GlobalArgsImpl.getInstance().aqoraUrl();
const endpoint = GlobalArgsImpl.getInstance().graphqlUrl();

async function replaceFile(filePath: string, contents: Buffer): Promise<void> {
  await fs.writeFile(filePath, contents);
}

export async function withLockedCredentials<T>(
  f: (file: CredentialsFile) => Promise<T>,
): Promise<T> {
  const path = await credentialsPath();
  const lockFilePath = `${path}.lock`;

  // Check if lock file exists; if so, throw an error
  try {
    await fs.access(lockFilePath);
    throw new Error(`File is currently locked. Cannot access: ${lockFilePath}`);
  } catch {
    // If access fails, the lock file does not exist, so we proceed.
  }

  await fs.writeFile(lockFilePath, "", "utf8");

  try {
    let contents = await fs
      .readFile(path, { encoding: "utf8" })
      .catch(() => "");
    let credentials: CredentialsFile = contents
      ? JSON.parse(contents)
      : { credentials: {} };
    const result = await f(credentials);

    const updatedContents = JSON.stringify(credentials, null, 2);
    if (contents !== updatedContents) {
      await replaceFile(path, Buffer.from(updatedContents));
    }

    return result;
  } finally {
    await fs
      .unlink(lockFilePath)
      .catch((err) => console.error("Failed to remove lock file:", err));
  }
}

async function getAccessToken(): Promise<string | null> {
  return withLockedCredentials(async (file: CredentialsFile) => {
    const file_credentials = file.credentials[aqoraUrl.href];
    if (!file_credentials) {
      return null;
    }

    const credentials = new CredentialsClass(file_credentials);

    const expiresAt = DateTime.fromISO(credentials.expiresAt);

    if (expiresAt.minus({ seconds: EXPIRATION_PADDING_SEC }) > DateTime.utc()) {
      return credentials.accessToken;
    }

    const client = new ApolloClient({
      link: new HttpLink({
        uri: endpoint.toString(),
        fetch: fetch,
      }),
      cache: new InMemoryCache(),
    });

    const variables: Refresh_TokenMutationVariables = {
      clientId: credentials.clientId,
      refreshToken: credentials.refreshToken,
    };

    const { data } = await client.mutate<Refresh_TokenMutation>({
      mutation: REFRESH_TOKEN,
      variables,
    });

    const issued = data?.oauth2Refresh.issued;

    if (!issued) {
      throw new Error("GraphQL response missing issued token");
    }

    const newCredentials: CamelToSnakeCaseNested<Credentials> = {
      client_id: credentials.clientId,
      access_token: issued.accessToken,
      refresh_token: issued.refreshToken,
      expires_at: DateTime.utc().plus({ seconds: issued.expiresIn }).toString(),
    };

    file.credentials[aqoraUrl.href] = newCredentials;
    return newCredentials.access_token;
  });
}

export { getAccessToken };
