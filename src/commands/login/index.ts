import * as vscode from "vscode";
import { gql } from "../../graphql";
import {
  Login_Page_User_MutationMutation,
  Login_Page_User_MutationMutationVariables,
  Oauth2_Token_MutationMutation,
  Oauth2_Token_MutationMutationVariables,
} from "../../graphql/graphql";
import {
  Oauth2_Authorize_Page_MutationMutation,
  Oauth2_Authorize_Page_MutationMutationVariables,
} from "../../graphql/graphql";
import { URL } from "url";
import * as crypto from "crypto";
import { base64UrlSafeEncode } from "../utils";
import { hostname } from "os";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "cross-fetch";
import { GlobalArgsImpl } from "../../globalArgs";
import {
  Credentials,
  CredentialsFile,
  withLockedCredentials,
} from "../../credentials";
import { CamelToSnakeCaseNested } from "../../utils";
import { DateTime } from "luxon";

const LOGIN_PAGE_USER_MUTATION = gql(`
  mutation LOGIN_PAGE_USER_MUTATION($input: LoginUserInput!) {
    loginUser(input: $input) {
      node {
        id
      }
    }
  }
`);

const OAUTH2_AUTHORIZE_PAGE_MUTATION = gql(` 
  mutation OAUTH2_AUTHORIZE_PAGE_MUTATION($input: Oauth2AuthorizeInput!) {
    oauth2Authorize(input: $input) {
      unauthorized
      clientError
      redirectUri
    }
  }
`);

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

let capturedHeaders: Headers | null = null;

const customFetch = async (uri: string, options: RequestInit) => {
  const response = await fetch(uri, options);
  capturedHeaders = response.headers;
  return response;
};

function clientId(): string {
  let host: string;

  try {
    host = hostname();
  } catch (error) {
    host = "unknown";
  }

  return `${CLIENT_ID_PREFIX}${host}`;
}

const endpoint = GlobalArgsImpl.getInstance().graphqlUrl();
const aqoraUrl = GlobalArgsImpl.getInstance().aqoraUrl();

function validateUsernameOrEmail(input: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  if (emailRegex.test(input) || usernameRegex.test(input)) {
    return null;
  }
  return "Please enter a valid username or email address";
}

function validatePassword(input: string): string | null {
  if (input.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return null;
}

async function getUsernameOrEmail(): Promise<string | undefined> {
  return await vscode.window.showInputBox({
    prompt: "Please enter your email or username",
    placeHolder: "email@example.com or username",
    validateInput: validateUsernameOrEmail,
  });
}

async function getPassword(): Promise<string | undefined> {
  return await vscode.window.showInputBox({
    prompt: "Please enter your password",
    password: true,
    validateInput: validatePassword,
  });
}

export async function login() {
  const progressOptions: vscode.ProgressOptions = {
    location: vscode.ProgressLocation.Notification,
    title: "Login",
    cancellable: true,
  };

  await vscode.window.withProgress(progressOptions, async (progress, _) => {
    const client = new ApolloClient({
      link: new HttpLink({
        uri: endpoint.toString(),
        fetch: customFetch,
      }),
      cache: new InMemoryCache(),
    });

    progress.report({ message: "Waiting for user input [1/2]" });

    const usernameOrEmail = await getUsernameOrEmail();
    if (!usernameOrEmail) {
      vscode.window.showErrorMessage(
        "Username/Email input was cancelled or empty.",
      );
      return;
    }

    const password = await getPassword();
    if (!password) {
      vscode.window.showErrorMessage("Password input was cancelled or empty.");
      return;
    }

    progress.report({ message: "Authenticating [1/2]" });

    const variables: Login_Page_User_MutationMutationVariables = {
      input: {
        usernameOrEmail,
        password,
      },
    };

    const { data, errors } =
      await client.mutate<Login_Page_User_MutationMutation>({
        mutation: LOGIN_PAGE_USER_MUTATION,
        variables,
      });

    if (errors || !data?.loginUser?.node) {
      vscode.window.showErrorMessage(
        "Invalid username or password. Please check your credentials.",
      );
      return;
    }

    progress.report({ message: "Authenticating [2/2]" });

    const redirectUri = new URL("http://localhost/");
    const state = base64UrlSafeEncode(Buffer.from(crypto.randomBytes(16)));

    const oauthVariables: Oauth2_Authorize_Page_MutationMutationVariables = {
      input: {
        clientId: clientId(),
        redirectUri: redirectUri,
        state,
      },
    };

    const oauthResponse =
      await client.mutate<Oauth2_Authorize_Page_MutationMutation>({
        mutation: OAUTH2_AUTHORIZE_PAGE_MUTATION,
        variables: oauthVariables,
        context: {
          headers: {
            Authorization: `Bearer ${capturedHeaders?.get("x-access-token") ?? null}`,
          },
        },
      });

    if (
      oauthResponse.errors ||
      oauthResponse.data?.oauth2Authorize?.unauthorized
    ) {
      vscode.window.showErrorMessage(
        "Server denied this authentication request.",
      );
      return;
    }

    const redirectUriString = oauthResponse.data?.oauth2Authorize?.redirectUri;
    if (!redirectUriString) {
      vscode.window.showErrorMessage(
        "Invalid response from the server. Please try again.",
      );
      return;
    }

    const oauthTokenCode = new URL(redirectUriString).searchParams
      .get("code")
      ?.toString();

    if (!oauthTokenCode) {
      vscode.window.showErrorMessage(
        "Invalid response from the server. Please try again.",
      );
      return;
    }

    withLockedCredentials(async (file: CredentialsFile) => {
      const variables: Oauth2_Token_MutationMutationVariables = {
        clientId: clientId(),
        code: oauthTokenCode,
        redirectUri,
      };
      const { data, errors } =
        await client.mutate<Oauth2_Token_MutationMutation>({
          mutation: OAUTH2_TOKEN_MUTATION,
          variables,
        });

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
      progress.report({ message: "Authenticated!" });
    });

    vscode.window.showInformationMessage(
      "Login successful! \n VS Code will restart in 5 seconds to make sure everything works.",
      { modal: true },
    );
    setTimeout(() => {
      vscode.commands.executeCommand("workbench.action.reloadWindow");
    }, 5000);
  });
}

export const loginDisposable = vscode.commands.registerCommand(
  "aqora.login",
  login,
);
