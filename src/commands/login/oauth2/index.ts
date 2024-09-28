import * as vscode from "vscode";
import { clientId, createCredentials } from "../createCredentials";
import { GlobalArgsImpl } from "../../../globalArgs";
import { base64UrlSafeEncode } from "../../utils";
import { randomBytes } from "crypto";
import {
  getAvailablePort,
  startLocalServerForCallback,
} from "./callbackServer";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import fetch from "cross-fetch";
import { InMemoryCache } from "apollo-cache-inmemory";
import { isUserConnected } from "../../../credentials";

function authorizeUrl(clientId: string, redirectUri: URL, state: string): URL {
  const baseUrl = new URL(
    "/oauth2/authorize",
    GlobalArgsImpl.getInstance().aqoraUrl(),
  );

  baseUrl.searchParams.append("client_id", clientId);
  baseUrl.searchParams.append("state", state);
  baseUrl.searchParams.append("redirect_uri", redirectUri.toString());

  return baseUrl;
}

async function initiateOAuthFlow(port: number): Promise<URL> {
  const redirectUri = new URL(`http://localhost:${port}/callback`);
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

  const client = new ApolloClient({
    link: new HttpLink({
      uri: GlobalArgsImpl.getInstance().graphqlUrl().toString(),
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });

  await createCredentials(
    authCode,
    GlobalArgsImpl.getInstance().aqoraUrl(),
    redirectUri,
    client,
  );
}

export const loginDisposable = vscode.commands.registerCommand(
  "aqora.login",
  login,
);
