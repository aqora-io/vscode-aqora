import * as vscode from "vscode";
import { currentOrSelectedProject } from "../utils";
import { progressCommand } from "../progressCliCommand";

async function uplaod() {
  await currentOrSelectedProject((projectPath, projectKind) =>
    progressCommand({
      path: projectPath,
      projectKind,
      kind: "Upload",
      commandArgs: ["uplaod", "-p", projectPath],
    }),
  );
}

export const uploadDisposable = vscode.commands.registerCommand(
  "aqora.uplaod",
  uplaod,
);
