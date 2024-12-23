import * as vscode from "vscode";
import { progressCommand } from "../progressCliCommand";
import { currentOrSelectedProject, isAqoraInstalled } from "../utils";

async function uplaod() {
  if (await isAqoraInstalled()) {
    await currentOrSelectedProject((projectPath, projectKind) =>
      progressCommand({
        path: projectPath,
        projectKind,
        commandArgs: ["upload", "-p", projectPath],
      })
    );
  }
}

export const uploadDisposable = vscode.commands.registerCommand(
  "aqora.uplaod",
  uplaod,
);
