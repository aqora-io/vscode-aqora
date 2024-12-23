import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import { GlobalArgsImpl } from "./globalArgs";
import { fetch } from "cross-fetch";
import { getAccessToken } from "./credentials";

const endpoint = GlobalArgsImpl.getInstance().graphqlUrl().toString();

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
  return new ApolloClient({
    link: new HttpLink({
      uri: endpoint,
      fetch,
      headers,
    }),
    cache: new InMemoryCache(),
  });
}

export const client = createApolloClient();
