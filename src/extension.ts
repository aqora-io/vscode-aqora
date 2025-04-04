import * as vscode from "vscode";
import registerCommands from "./commands";
import { GlobalArgs } from "./globalArgs";
import { checkPython } from "./python";

const GLOBAL_STATE_KEYS = {
  pythonChecked: "hasCheckedPython",
};

export function activate(context: vscode.ExtensionContext) {
  console.info("==== Starting ====");
  GlobalArgs.setExtensionPath(context.extensionPath);
  const hasCheckedPython = context.globalState.get<boolean>(
    GLOBAL_STATE_KEYS.pythonChecked,
    false,
  );

  if (!hasCheckedPython) {
    checkPython();
    context.globalState.update(GLOBAL_STATE_KEYS.pythonChecked, true);
  }
  registerCommands(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
