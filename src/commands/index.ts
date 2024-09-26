import * as vscode from "vscode";
import { templateCompetitionDisposable } from "./competitions";
import { loginDisposable } from "./login";
import { testProjectDisposable } from "./testProject";
import { uploadDisposable } from "./upload";

const disposables = [
  templateCompetitionDisposable,
  loginDisposable,
  testProjectDisposable,
  uploadDisposable,
];

export default function registerCommands(
  context: vscode.ExtensionContext,
): void {
  disposables.map((disposable) => context.subscriptions.push(disposable));
}
