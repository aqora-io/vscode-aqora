import { promises as fs } from "fs";
import { DateTime } from "luxon";
import fetch from "cross-fetch";
import * as fsExt from "fs-ext";
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

const EXPIRATION_PADDING_SEC = 60;

interface Credentials {
  clientId: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: DateTime;
}

interface CredentialsFile {
  credentials: Record<string, Credentials>;
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

const endpoint = GlobalArgsImpl.getInstance().graphqlUrl();

async function replaceFile(filePath: string, contents: string): Promise<void> {
  await fs.writeFile(filePath, contents, "utf8");
}

async function withLockedCredentials<T>(
  f: (file: CredentialsFile) => Promise<T>,
): Promise<T> {
  const path = await credentialsPath();
  const fileHandle = await fs.open(path, "a+");

  // Lock the file
  await new Promise<void>((resolve, reject) => {
    fsExt.flock(fileHandle.fd, "ex", (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

  try {
    let contents = await fileHandle.readFile({ encoding: "utf8" });
    let credentials: CredentialsFile = contents
      ? JSON.parse(contents)
      : { credentials: {} };

    const result = await f(credentials);

    const updatedContents = JSON.stringify(credentials, null, 2);
    if (contents !== updatedContents) {
      await replaceFile(path, updatedContents);
    }

    return result;
  } finally {
    // Unlock the file
    await new Promise<void>((resolve, reject) => {
      fsExt.flock(fileHandle.fd, "un", (err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });

    await fileHandle.close();
  }
}

async function getAccessToken(): Promise<string | null> {
  return withLockedCredentials(async (file: CredentialsFile) => {
    const credentials = file.credentials[endpoint.href];
    if (!credentials) {
      return null;
    }

    const expiresAt = DateTime.fromISO(credentials.expiresAt.toString());
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

    console.log("REFRESH DATA: ", data);

    const issued = data?.oauth2Refresh.issued;

    if (!issued) {
      throw new Error("GraphQL response missing issued token");
    }

    const newCredentials: Credentials = {
      clientId: credentials.clientId,
      accessToken: issued.accessToken,
      refreshToken: issued.refreshToken,
      expiresAt: DateTime.utc().plus({ seconds: issued.expiresIn }),
    };

    file.credentials[endpoint.href] = newCredentials;
    console.log("new creds : ", newCredentials);
    return newCredentials.accessToken;
  });
}

export { getAccessToken };
