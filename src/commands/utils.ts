import { exec } from "child_process";
import { platform } from "os";
import * as vscode from "vscode";
import { AqoraProjectType, GlobalArgsImpl } from "../globalArgs";

export async function askForSingleFolderPath(): Promise<string | null> {
  const options: vscode.OpenDialogOptions = {
    canSelectMany: false, // Single folder selection
    canSelectFiles: false, // No file selection
    canSelectFolders: true, // Allow folder selection
    openLabel: "Select Folder",
  };

  const folderUri = await vscode.window.showOpenDialog(options);

  if (folderUri && folderUri[0]) {
    return folderUri[0].fsPath;
  } else {
    return null;
  }
}

export function base64UrlSafeEncode(buffer: Buffer): string {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-") // Replace '+' with '-'
    .replace(/\//g, "_") // Replace '/' with '_'
    .replace(/=+$/, ""); // Remove padding '=' characters
}

export function base64UrlSafeDecode(base64Url: string): Buffer {
  const base64 = base64Url
    .replace(/-/g, "+") // Replace '-' back to '+'
    .replace(/_/g, "/"); // Replace '_' back to '/'

  const paddedBase64 = base64.padEnd(
    base64.length + ((4 - (base64.length % 4)) % 4),
    "=",
  );

  return Buffer.from(paddedBase64, "base64");
}

export function isAqoraInstalled(): Promise<boolean> {
  return new Promise((resolve, _) => {
    const isWindows = platform() === "win32";
    const checkCommand = isWindows ? "where aqora" : "which aqora";

    exec(checkCommand, (error, stderr) => {
      if (error) {
        vscode.window
          .showErrorMessage(
            `aqora CLI tool not found in the system PATH: ${stderr}`,
            "Run `pipx install aqora-cli`",
            "Visit Documentation",
          )
          .then((selection) => {
            if (selection === "Visit Documentation") {
              vscode.env.openExternal(
                vscode.Uri.parse(
                  "https://aqora.io/competitions/h2-groundstate-energy/data",
                ),
              );
            }
          });
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

export async function currentOrSelectedProject(
  process: (
    projectPath: string,
    kind: AqoraProjectType,
  ) => Promise<string | undefined | void> | void,
) {
  const aqoraProject = await GlobalArgsImpl.getInstance().aqoraProject();
  const currentPath = GlobalArgsImpl.getInstance().currentPath();

  if (aqoraProject && currentPath) {
    await process(currentPath, aqoraProject.tool.aqora.type);
    return currentPath;
  }

  const projectPath = await askForSingleFolderPath();

  if (!projectPath) {
    vscode.window.showErrorMessage("Please specify a project folder.");
    return;
  }

  const selectedAqoraProject = await GlobalArgsImpl.getInstance().aqoraProject(projectPath);

  if (!selectedAqoraProject) {
    vscode.window.showErrorMessage("Selected is not Aqora project.");
    return;
  }

  await process(projectPath, selectedAqoraProject.tool.aqora.type);
  return projectPath;
}
