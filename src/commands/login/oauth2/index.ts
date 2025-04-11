import { getPublicKeyAsync, signAsync } from "@noble/ed25519";
import { randomBytes } from "crypto";
import { GlobalArgs } from "src/globalArgs";
import { gql } from "src/graphql";
import { Oauth2RedirectSubscriptionSubscription } from "src/graphql/graphql";
import { createApolloClient } from "src/graphqlClient";
import * as vscode from "vscode";
import { isUserConnected } from "../../../credentials";
import { base64UrlSafeEncode } from "../../utils";
import { clientId, createCredentials } from "../createCredentials";

const OAUTH2_REDIRECT_SUBSCRIPTION = gql(`
  subscription Oauth2RedirectSubscription($authUrl: Url!, $signature: String!) {
     oauth2Redirect(input: { authorizationUrl: $authUrl, signature: $signature }) {
      code
    }
  }
`);

function authorizeUrl(clientId: string, redirectUri: URL, state: string): URL {
  const baseUrl = new URL("/oauth2/authorize", GlobalArgs.aqoraUrl());

  baseUrl.searchParams.append("client_id", clientId);
  baseUrl.searchParams.append("state", state);
  baseUrl.searchParams.append("redirect_uri", redirectUri.toString());

  return baseUrl;
}

async function login() {
  if (await isUserConnected()) {
    vscode.window.showInformationMessage("You are already logged in.");
    return;
  }

  const seed = randomBytes(32);
  const publicKey = await getPublicKeyAsync(seed);

  const redirectUri = new URL(
    `/oauth2/sub/${base64UrlSafeEncode(Buffer.from(publicKey))}`,
    GlobalArgs.aqoraUrl(),
  );
  const authUrl = authorizeUrl(
    clientId(),
    redirectUri,
    base64UrlSafeEncode(Buffer.from(randomBytes(16))),
  );

  const signatureBytes = await signAsync(Buffer.from(authUrl.toString()), seed);
  const signature = base64UrlSafeEncode(Buffer.from(signatureBytes));

  const client = await createApolloClient();

  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Authenticating with Server",
      cancellable: true,
    },
    async (progress, token) => {
      progress.report({
        message: "Opening browser and waiting for response...",
        increment: 15,
      });
      vscode.env.openExternal(vscode.Uri.parse(authUrl.toString()));
      const subscription = client
        .subscribe<Oauth2RedirectSubscriptionSubscription>({
          query: OAUTH2_REDIRECT_SUBSCRIPTION,
          variables: {
            authUrl,
            signature,
          },
        })
        .subscribe({
          next: async ({ data }) => {
            if (!data) {
              progress.report({
                message: `Waiting for the browser response... \nPlease navigate to this url: \navigate${authUrl}`,
              });
              return;
            }
            await createCredentials(
              data?.oauth2Redirect.code,
              GlobalArgs.aqoraUrl(),
              redirectUri,
              client,
            );
            progress.report({
              message: "You're successfully logged in!",
              increment: 100,
            });
            subscription.unsubscribe();
          },
          error: (errorValue) => {
            vscode.window.showErrorMessage("No response from server.", {
              detail: errorValue ?? "Please retry again",
              modal: false,
            });
            subscription.unsubscribe();
          },
          complete: () => subscription.unsubscribe(),
        });
      token.onCancellationRequested(() => subscription.unsubscribe());
    },
  );
}

export const loginDisposable = vscode.commands.registerCommand(
  "aqora.login",
  login,
);
