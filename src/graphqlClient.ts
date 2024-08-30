import ApolloClient from "apollo-client";
import { GlobalArgsImpl } from "./globalArgs";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { fetch } from "cross-fetch";

const endpoint = GlobalArgsImpl.getInstance().graphqlUrl().toString();

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: endpoint,
      fetch: fetch,
    }),
    cache: new InMemoryCache(),
  });
}

export const client = createApolloClient();
