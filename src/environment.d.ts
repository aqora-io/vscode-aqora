declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      GRAPHQL_ENDPOINT?: "string";
    }
  }
}

export {};
