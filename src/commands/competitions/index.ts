import * as vscode from "vscode";
import { gql } from "../../graphql/gql";
import { Get_CompetitionsQuery } from "../../graphql/graphql";
import { client as gqlClient } from "../../graphqlClient";
import { progressCommand } from "../progressCliCommand";
import { askForSingleFolderPath, isAqoraInstalled } from "../utils";

const GET_COMPETITIONS = gql(`
  query GET_COMPETITIONS {
    competitions {
      edges {
        node { 
          slug
          title
          shortDescription
        }
      }
    }
  }
`);

const competitionPath = (path: string, slug: string) => `${path}/${slug}`;

async function templateCompetition() {
  const client = await gqlClient;
  const {
    data: { competitions },
  } = await client.query<Get_CompetitionsQuery>({ query: GET_COMPETITIONS });

  if (!competitions?.edges) {
    return;
  }
  const competition = await vscode.window.showQuickPick(
    competitions.edges.map((competition) => ({
      label: competition.node.title,
      detail: competition.node.shortDescription,
      id: competition.node.slug,
    })),
    { matchOnDetail: true },
  );

  if (!competition) {
    return null;
  }

  if (await isAqoraInstalled()) {
    const userClonePath = await askForSingleFolderPath();
    if (!userClonePath) {
      vscode.window.showErrorMessage("Path not found.");
      return;
    }
    progressCommand({
      path: userClonePath,
      projectKind: "clone",
      commandArgs: [
        "template",
        competition.id,
        competitionPath(userClonePath, competition.id),
      ],
    }).then(() => {
      vscode.commands.executeCommand(
        "vscode.openFolder",
        vscode.Uri.file(competitionPath(userClonePath, competition.id)),
        true,
      );
    });
  }
}

export const templateCompetitionDisposable = vscode.commands.registerCommand(
  "aqora.templateCompetition",
  templateCompetition,
);
