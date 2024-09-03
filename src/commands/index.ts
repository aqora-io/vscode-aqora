import * as vscode from "vscode";
import { templateCompetitionDisposable } from "./competitions";
import { loginDisposable } from "./login";

const disposable = [templateCompetitionDisposable, loginDisposable];

export default function registerCommands(
  context: vscode.ExtensionContext,
): void {
  disposable.map((disposable) => context.subscriptions.push(disposable));
}
