import * as vscode from "vscode";
import { exec } from "child_process";

const execCommand = (command: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

const getPythonCommand = (): string =>
  process.platform === "win32" ? "python" : "python3";

const showPythonFound = (versionOutput: string): void => {
  vscode.window.showInformationMessage(
    `Python found! Version: ${versionOutput.trim()}`,
  );
};

const showPythonNotFound = (): void => {
  vscode.window.showWarningMessage("Python not found on your system.");
};

export const checkPython = async (): Promise<void> => {
  const pythonCommand = getPythonCommand();

  try {
    const version = await execCommand(`${pythonCommand} --version`);
    showPythonFound(version);
  } catch (_) {
    const fallbackCommand = pythonCommand === "python" ? "python3" : "python";
    try {
      const version = await execCommand(`${fallbackCommand} --version`);
      showPythonFound(version);
    } catch (_) {
      showPythonNotFound();
    }
  }
};
