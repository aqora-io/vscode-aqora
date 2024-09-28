import * as vscode from "vscode";
import { templateCompetitionDisposable } from "./competitions";
import { interactiveLoginDisposable } from "./login";
import { testProjectDisposable } from "./testProject";
import { uploadDisposable } from "./upload";
import { loginDisposable } from "./login/oauth2";

const disposables = [
  templateCompetitionDisposable,
  loginDisposable,
  interactiveLoginDisposable,
  testProjectDisposable,
  uploadDisposable,
];

export default function registerCommands(
  context: vscode.ExtensionContext,
): void {
  disposables.map((disposable) => context.subscriptions.push(disposable));
}
