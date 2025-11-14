import * as vscode from "vscode";
import { templateCompetitionDisposable } from "./competitions";
import { datasetDisposables } from "./datasets";
import { loginDisposable } from "./login/oauth2";
import { testProjectDisposable } from "./testProject";
import { uploadDisposable } from "./upload";

const disposables = [
  templateCompetitionDisposable,
  loginDisposable,
  testProjectDisposable,
  uploadDisposable,
  ...datasetDisposables,
];

export default function registerCommands(
  context: vscode.ExtensionContext,
): void {
  disposables.map((disposable) => context.subscriptions.push(disposable));
}
