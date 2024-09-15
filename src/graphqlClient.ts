import ApolloClient from "apollo-client";
import { GlobalArgsImpl } from "./globalArgs";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { fetch } from "cross-fetch";
import { getAccessToken } from "./credentials";

const endpoint = GlobalArgsImpl.getInstance().graphqlUrl().toString();

async function createApolloClient() {
  const headers = await getAccessToken()
    .then((accessToken) => {
      if (accessToken) {
        return {
          Authorization: `Bearer ${accessToken}`,
          "User-Agent": "aqora-vscode",
        };
      } else {
        return {};
      }
    })
    .catch((error) => {
      console.error("Error fetching headers:", error);
      return {};
    });
  return new ApolloClient({
    link: new HttpLink({
      uri: endpoint,
      fetch: fetch,
      headers,
    }),
    cache: new InMemoryCache(),
  });
}

export const client = createApolloClient();
