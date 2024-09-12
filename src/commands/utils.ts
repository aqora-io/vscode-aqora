import * as vscode from "vscode";

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
