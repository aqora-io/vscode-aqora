import { Get_CompetitionsQuery } from "../../graphql/graphql";
import { gql } from "../../graphql/gql";
import { client as gqlClient } from "../../graphqlClient";
import * as vscode from "vscode";
import { askForSingleFolderPath } from "../utils";

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
  const client = await gqlClient;
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

  const userTemplatePath = await askForSingleFolderPath();
  if (userTemplatePath) {
    const CLITemplateCommmand = `aqora template ${competition.label} ${userTemplatePath}/${competition.label}`;
    const terminal = vscode.window.createTerminal(
      "Download " + competition.label,
    );
    terminal.sendText(CLITemplateCommmand);
    terminal.show();
    vscode.window.showInformationMessage(
      "Template downloaded in " + userTemplatePath,
    );
  }
}

export const templateCompetitionDisposable = vscode.commands.registerCommand(
  "aqora.templateCompetition",
  templateCompetition,
);
