import { Get_CompetitionsQuery } from "../../graphql/graphql";
import { gql } from "../../graphql/gql";
import { client as gqlClient } from "../../graphqlClient";
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

async function askForFolderPath(): Promise<string | null> {
  const options: vscode.OpenDialogOptions = {
    canSelectMany: false, // Single folder selection
    canSelectFiles: false, // No file selection
    canSelectFolders: true, // Allow folder selection
    openLabel: "Select Folder",
  };

  const folderUri = await vscode.window.showOpenDialog(options);

  if (folderUri && folderUri[0]) {
    return folderUri[0].fsPath;
  } else {
    return null;
  }
}

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

  const userTemplatePath = await askForFolderPath();
  if (userTemplatePath) {
    const CLITemplateCommmand = `aqora template ${competition.label} -p ${userTemplatePath}`;
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
