/* eslint-disable */
import * as types from './graphql.js';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GET_COMPETITIONS {\n    competitions {\n      edges {\n        node {\n          slug\n          title\n          shortDescription\n        }\n      }\n    }\n  }\n": types.Get_CompetitionsDocument,
    " \n  mutation OAUTH2_TOKEN_MUTATION($code: String!, $clientId: String!, $redirectUri: Url!) {\n    oauth2Token(\n      input: { code: $code, clientId: $clientId, redirectUri: $redirectUri }\n    ) {\n      clientError\n      unauthorized\n      issued {\n        expiresIn\n        accessToken\n        refreshToken\n      }\n    }\n  }\n": types.Oauth2_Token_MutationDocument,
    "\n  subscription COMPETITION_ENTITY_SUBMISSION_STATUS(\n    $competitionId: ID!\n    $entityId: ID!\n  ) {\n    projectVersionStatusUpdate(\n      competitionId: $competitionId\n      entityId: $entityId\n    ) {\n      latest\n      status\n      evaluation {\n        score\n        error\n        max\n      }\n    }\n  }\n": types.Competition_Entity_Submission_StatusDocument,
    "\n  query UPLOAD ($slug: String!) {\n    viewer {\n      id\n    }\n    competitionBySlug(slug: $slug) {\n      id\n    }\n  }\n": types.UploadDocument,
    "\n  mutation REFRESH_TOKEN($clientId: String!, $refreshToken: String!) {\n    oauth2Refresh(input: { clientId: $clientId, refreshToken: $refreshToken }) {\n      clientError\n      unauthorized\n      issued {\n        expiresIn\n        accessToken\n        refreshToken\n      }\n    }\n  }\n": types.Refresh_TokenDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GET_COMPETITIONS {\n    competitions {\n      edges {\n        node {\n          slug\n          title\n          shortDescription\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GET_COMPETITIONS {\n    competitions {\n      edges {\n        node {\n          slug\n          title\n          shortDescription\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: " \n  mutation OAUTH2_TOKEN_MUTATION($code: String!, $clientId: String!, $redirectUri: Url!) {\n    oauth2Token(\n      input: { code: $code, clientId: $clientId, redirectUri: $redirectUri }\n    ) {\n      clientError\n      unauthorized\n      issued {\n        expiresIn\n        accessToken\n        refreshToken\n      }\n    }\n  }\n"): (typeof documents)[" \n  mutation OAUTH2_TOKEN_MUTATION($code: String!, $clientId: String!, $redirectUri: Url!) {\n    oauth2Token(\n      input: { code: $code, clientId: $clientId, redirectUri: $redirectUri }\n    ) {\n      clientError\n      unauthorized\n      issued {\n        expiresIn\n        accessToken\n        refreshToken\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription COMPETITION_ENTITY_SUBMISSION_STATUS(\n    $competitionId: ID!\n    $entityId: ID!\n  ) {\n    projectVersionStatusUpdate(\n      competitionId: $competitionId\n      entityId: $entityId\n    ) {\n      latest\n      status\n      evaluation {\n        score\n        error\n        max\n      }\n    }\n  }\n"): (typeof documents)["\n  subscription COMPETITION_ENTITY_SUBMISSION_STATUS(\n    $competitionId: ID!\n    $entityId: ID!\n  ) {\n    projectVersionStatusUpdate(\n      competitionId: $competitionId\n      entityId: $entityId\n    ) {\n      latest\n      status\n      evaluation {\n        score\n        error\n        max\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UPLOAD ($slug: String!) {\n    viewer {\n      id\n    }\n    competitionBySlug(slug: $slug) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query UPLOAD ($slug: String!) {\n    viewer {\n      id\n    }\n    competitionBySlug(slug: $slug) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation REFRESH_TOKEN($clientId: String!, $refreshToken: String!) {\n    oauth2Refresh(input: { clientId: $clientId, refreshToken: $refreshToken }) {\n      clientError\n      unauthorized\n      issued {\n        expiresIn\n        accessToken\n        refreshToken\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation REFRESH_TOKEN($clientId: String!, $refreshToken: String!) {\n    oauth2Refresh(input: { clientId: $clientId, refreshToken: $refreshToken }) {\n      clientError\n      unauthorized\n      issued {\n        expiresIn\n        accessToken\n        refreshToken\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;