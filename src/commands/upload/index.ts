import * as vscode from "vscode";
import { currentOrSelectedProject, isAqoraInstalled } from "../utils";
import { progressCommand } from "../progressCliCommand";

async function uplaod() {
  if (await isAqoraInstalled()) {
    await currentOrSelectedProject((projectPath, projectKind) =>
      progressCommand({
        path: projectPath,
        projectKind,
        kind: "Upload",
        commandArgs: ["upload", "-p", projectPath],
      }),
    );
  }
}

export const uploadDisposable = vscode.commands.registerCommand(
  "aqora.uplaod",
  uplaod,
);
