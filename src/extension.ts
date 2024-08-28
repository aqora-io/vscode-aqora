import * as vscode from "vscode";
import { exec } from "child_process";
import * as os from "os";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "aqora.login",
    () => {
      login();
    },
  );

  context.subscriptions.push(disposable);
}

function login() {
  const isWindows = os.platform() === "win32";
  const checkCommand = isWindows ? "where aqora" : "which aqora";

  exec(checkCommand, (error, stderr) => {
    if (error) {
      vscode.window.showErrorMessage(
        `aqora CLI tool not found in the system PATH: ${stderr}`,
        "Run `pipx install aqora-cli`",
        "Visit Documentation"
      ).then(selection => {
        if (selection === "Visit Documentation") {
          vscode.env.openExternal(vscode.Uri.parse("https://aqora.io/competitions/h2-groundstate-energy/data"));
        }
      });
      return;
    }

    const terminal = vscode.window.createTerminal("Login CLI");
    terminal.sendText("aqora login");
    terminal.show();
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}