import { Get_CompetitionsQuery } from "../../graphql/graphql";
import { gql } from "../../graphql/gql";
import { client } from "../../graphqlClient";
import * as vscode from "vscode";

const GET_COMPETITIONS = gql(`
  query GET_COMPETITIONS {
    competitions {
      edges {
        node {
          id
          slug
          shortDescription
        }
      }
    }
  }
`);

async function templateCompetition() {
  const {
    data: { competitions },
  } = await client.query<Get_CompetitionsQuery>({ query: GET_COMPETITIONS });

  if (!competitions?.edges) {
    return;
  }
  const competition = await vscode.window.showQuickPick(
    competitions.edges.map((competition) => ({
      label: competition.node.slug,
      details: competition.node.shortDescription,
      id: competition.node.id,
    })),
    { matchOnDetail: true },
  );

  if (!competition) {
    return null;
  }

  vscode.window.showInformationMessage("aqora template " + competition.label);
}

export const templateCompetitionDisposable = vscode.commands.registerCommand(
  "aqora.templateCompetition",
  templateCompetition,
);
