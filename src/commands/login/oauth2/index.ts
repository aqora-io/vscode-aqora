import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";
import { randomBytes } from "crypto";
import { GlobalArgs } from "src/globalArgs";
import * as vscode from "vscode";
import { isUserConnected } from "../../../credentials";
import { base64UrlSafeEncode } from "../../utils";
import { clientId, createCredentials } from "../createCredentials";
import {
  getAvailablePort,
  startLocalServerForCallback,
} from "./callbackServer";

function authorizeUrl(clientId: string, redirectUri: URL, state: string): URL {
  const baseUrl = new URL("/oauth2/authorize", GlobalArgs.aqoraUrl());

  baseUrl.searchParams.append("client_id", clientId);
  baseUrl.searchParams.append("state", state);
  baseUrl.searchParams.append("redirect_uri", redirectUri.toString());

  return baseUrl;
}

async function initiateOAuthFlow(port: number): Promise<URL> {
  const redirectUri = new URL(`http://127.0.0.1:${port}/callback`);
  const state = base64UrlSafeEncode(Buffer.from(randomBytes(16)));
  const authUrl = authorizeUrl(clientId(), redirectUri, state);

  await vscode.env.openExternal(vscode.Uri.parse(authUrl.toString()));
  return redirectUri;
}

async function login() {
  if (await isUserConnected()) {
    vscode.window.showInformationMessage("You are already logged in.");
    return;
  }
  const port = await getAvailablePort();
  const redirectUri = await initiateOAuthFlow(port);
  const authCode = await startLocalServerForCallback(port);

  if (!authCode) {
    return;
  }

  const client = new ApolloClient({
    link: new HttpLink({
      uri: GlobalArgs.graphqlUrl().toString(),
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  await createCredentials(authCode, GlobalArgs.aqoraUrl(), redirectUri, client);

  vscode.window.showInformationMessage(
    "Login successful! \n VS Code will restart in 5 seconds to make sure everything works.",
  );
  setTimeout(() => {
    vscode.commands.executeCommand("workbench.action.reloadWindow");
  }, 3000);
}

export const loginDisposable = vscode.commands.registerCommand(
  "aqora.login",
  login,
);
