import * as vscode from "vscode";
import { currentOrSelectedProject } from "../utils";
import { progressCommand } from "../progressCliCommand";

async function testProject() {
  await currentOrSelectedProject((projectPath, projectKind) =>
    progressCommand({
      path: projectPath,
      projectKind,
      kind: "Test",
      commandArgs: ["test", "-p", projectPath],
    }),
  );
}

export const testProjectDisposable = vscode.commands.registerCommand(
  "aqora.test",
  testProject,
);
