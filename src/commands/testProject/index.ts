import * as vscode from "vscode";
import { progressCommand } from "../progressCliCommand";
import { currentOrSelectedProject, isAqoraInstalled } from "../utils";
import { readProjectLastRunResult } from "./readScore";

async function testProject() {
  const editor = vscode.window.activeNotebookEditor;
  console.log(editor);
  if (await isAqoraInstalled()) {
    const projectDir = await currentOrSelectedProject(
      (projectPath, projectKind) =>
        progressCommand({
          path: projectPath,
          projectKind,
          commandArgs: ["test", "-p", projectPath],
        }),
    );

    if (!projectDir) {
      return;
    }
    readProjectLastRunResult(projectDir)
      .then((result) => {
        vscode.window.showInformationMessage(
          `Great job! Your test scored ${result.score}.`,
        );
      })
      .catch((_error) => {
        vscode.window.showWarningMessage(
          "Unable to retrieve the score, but the test is running successfully.",
        );
      });
  }
}

export const testProjectDisposable = vscode.commands.registerCommand(
  "aqora.test",
  testProject,
);
