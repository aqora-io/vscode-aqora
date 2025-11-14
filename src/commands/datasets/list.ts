import { GlobalArgs } from "src/globalArgs";
import { Get_DatasetsQuery } from "src/graphql/graphql";
import { createAuthenticatedClient } from "src/graphqlClient";
import * as vscode from "vscode";
import { gql } from "../../graphql/gql";

const GET_DATASETS = gql(`
  query GET_DATASETS {
    datasets {
      edges {
        node {
          slug
          votes
          shortDescription
        }
      }
    }
  }
`);

export async function list() {
  const client = await createAuthenticatedClient();
  const {
    data: { datasets },
  } = await client.query<Get_DatasetsQuery>({ query: GET_DATASETS });

  if (!datasets?.edges) {
    return;
  }

  const dataset = await vscode.window.showQuickPick(
    datasets.edges.map(({ node }) => ({
      label: node.slug,
      description: node.shortDescription || node.slug,
      detail: `Dataset with ${node.votes} votes`,
      id: node.slug,
    })),
    { matchOnDetail: true },
  );

  if (!dataset) {
    return;
  }

  const datasetUrl = new URL(`datasets/${dataset.id}`, GlobalArgs.aqoraUrl());
  vscode.env.openExternal(vscode.Uri.parse(datasetUrl.toString()));
}
