declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      GRAPHQL_ENDPOINT?: string;
      AQORA_CONFIG_HOME?: string;
    }
  }
}

export {};
