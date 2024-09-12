import * as vscode from "vscode";
import { templateCompetitionDisposable } from "./competitions";
import { testSubmissionDisposable } from "./competitions/test";
import { loginDisposable } from "./login";

const disposable = [
  templateCompetitionDisposable,
  loginDisposable,
  testSubmissionDisposable,
];

export default function registerCommands(
  context: vscode.ExtensionContext,
): void {
  disposable.map((disposable) => context.subscriptions.push(disposable));
}
