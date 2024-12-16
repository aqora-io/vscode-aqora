import { DateTime } from "luxon";
import { hostname } from "os";
import * as vscode from "vscode";
import { Credentials, CredentialsFile, withLockedCredentials } from "../../credentials";
import { gql } from "../../graphql";
import { Oauth2_Token_MutationMutation, Oauth2_Token_MutationMutationVariables } from "../../graphql/graphql";
import { CamelToSnakeCaseNested } from "../../utils";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client/core";

const OAUTH2_TOKEN_MUTATION = gql(` 
  mutation OAUTH2_TOKEN_MUTATION($code: String!, $clientId: String!, $redirectUri: Url!) {
    oauth2Token(
      input: { code: $code, clientId: $clientId, redirectUri: $redirectUri }
    ) {
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

const CLIENT_ID_PREFIX = "localhost-";

export function clientId(): string {
  let host: string;

  try {
    host = hostname();
  } catch (error) {
    host = "unknown";
  }

  return `${CLIENT_ID_PREFIX}${host}`;
}

export async function createCredentials(
  code: string,
  aqoraUrl: URL,
  redirectUri: URL,
  client: ApolloClient<NormalizedCacheObject>,
) {
  withLockedCredentials(async (file: CredentialsFile) => {
    const variables: Oauth2_Token_MutationMutationVariables = {
      clientId: clientId(),
      code,
      redirectUri,
    };
    const { data, errors } = await client.mutate<Oauth2_Token_MutationMutation>(
      {
        mutation: OAUTH2_TOKEN_MUTATION,
        variables,
      },
    );

    if (errors || data?.oauth2Token.unauthorized) {
      vscode.window.showErrorMessage("GraphQL response missing data");
      return;
    }

    if (!data?.oauth2Token.issued) {
      vscode.window.showErrorMessage("GraphQL response missing issued");
      return;
    }

    const newCredentials: CamelToSnakeCaseNested<Credentials> = {
      client_id: clientId(),
      access_token: data.oauth2Token.issued.accessToken,
      refresh_token: data.oauth2Token.issued.refreshToken,
      expires_at: DateTime.utc()
        .plus({ seconds: data.oauth2Token.issued.expiresIn })
        .toString(),
    };
    file.credentials[aqoraUrl.href] = newCredentials;
  });
}
