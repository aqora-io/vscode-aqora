import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client/core";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { fetch } from "cross-fetch";
import { createClient } from "graphql-ws";
import { WebSocket } from "ws";
import { getAccessToken } from "./credentials";
import { GlobalArgs } from "./globalArgs";

const parseEndpoint = (endpoint: URL) => {
  const wsEndpoint = new URL(endpoint);
  wsEndpoint.protocol = endpoint.protocol === "https:" ? "wss:" : "ws:";
  return [endpoint.toString(), wsEndpoint.toString()];
};

const [endpoint, wsEndpoint] = parseEndpoint(
  GlobalArgs.graphqlUrl(),
);

async function createApolloClient() {
  const headers: Record<string, string> = await getAccessToken()
    .then((accessToken) => ({
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
      "User-Agent": "aqora-vscode",
    }))
    .catch((error) => {
      console.error("Error fetching headers:", error);
      return {};
    });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition"
        && definition.operation === "subscription"
      );
    },
    new GraphQLWsLink(
      createClient({
        url: wsEndpoint,
        webSocketImpl: WebSocket,
        connectionParams: () => ({
          headers,
        }),
      }),
    ),
    new HttpLink({
      uri: endpoint,
      fetch,
      headers,
    }),
  );
  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}

export const client = createApolloClient();
