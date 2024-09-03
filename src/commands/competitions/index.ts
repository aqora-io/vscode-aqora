import gql from "graphql-tag";
import { Get_CompetitionsQuery } from "../../graphql/graphql";
import { client } from "../../graphqlClient";
import * as vscode from "vscode";

const GET_COMPETITIONS = gql`
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
`;

const transformCompetitionsToQuickPick = (
  competitions: Get_CompetitionsQuery["competitions"]["edges"],
) => {
  return competitions.map((competition) => ({
    label: competition.node.slug,
    details: competition.node.shortDescription,
    id: competition.node.id,
  }));
};

async function templateCompetition() {
  const {
    data: { competitions },
  } = await client.query<Get_CompetitionsQuery>({ query: GET_COMPETITIONS });

  if (!competitions?.edges) {
    return;
  }
  const competition = await vscode.window.showQuickPick(
    transformCompetitionsToQuickPick(competitions.edges),
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
