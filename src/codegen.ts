import type { CodegenConfig } from "@graphql-codegen/cli";

const schema = process.env.GRAPHQL_ENDPOINT || "https://aqora.io/graphql";

const config: CodegenConfig = {
  schema,
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/graphql/": {
      presetConfig: {
        gqlTagName: "gql",
      },
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
        flattenGeneratedTypes: true,
        enumsAsTypes: true,
        futureProofEnums: true,
        immutableTypes: true,
        maybeValue: "T | null | undefined",
        inputMaybeValue: "T | null | undefined",
        disableDescriptions: true,
        useImplementingTypes: true,
        strictScalars: true,
        emitLegacyCommonJSImports: true,
        scalars: {
          ID: {
            input: "string",
            output: "string | number",
          },
          DateTime: "Date",
          JSON: "{ [key: string]: any }",
          Semver: "`${number}.${number}.${number}`",
          UsernameOrID: "string",
          Upload: "{ filename: string, content_type?: string, content: File  }",
          Url: "URL",
        },
        avoidOptionals: {
          field: true,
          inputValue: true,
          object: true,
          defaultValue: true,
        },
      },
    },
    "./schema.gql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
