import { URL } from "url";
import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export interface GlobalArgs {
  url: URL;

  aqoraUrl(): URL;
  graphqlUrl(): URL;
  isAqoraProject(): Promise<boolean>;
  currentPath(): string | undefined;
}

export class GlobalArgsImpl implements GlobalArgs {
  url: URL;
  private static instance: GlobalArgsImpl;

  private constructor() {
    this.url = new URL(
      vscode.workspace.getConfiguration().get("aqora.url") ||
        "https://aqora.io",
    );
  }

  public static getInstance(): GlobalArgsImpl {
    if (!GlobalArgsImpl.instance) {
      GlobalArgsImpl.instance = new GlobalArgsImpl();
    }
    return GlobalArgsImpl.instance;
  }

  aqoraUrl(): URL {
    return new URL(this.url);
  }
  graphqlUrl(): URL {
    return new URL("/graphql", this.aqoraUrl());
  }
  isAqoraProject(): Promise<boolean> {
    return isAqoraProject();
  }
  currentPath(): string | undefined {
    return getCurrentPath();
  }
}

interface AqoraProject {
  project: {
    name: string;
    version: string;
    requiresPython: string;
    dependencies: string[];
  };
}

function getCurrentPath() {
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (!workspaceFolders || workspaceFolders.length === 0) {
    return;
  }

  return workspaceFolders[0].uri.path;
}

async function isAqoraProject(): Promise<boolean> {
  const currentPath = getCurrentPath();

  if (!currentPath) {
    vscode.window.showErrorMessage("No workspace folder is open.");
    return false;
  }

  const pyprojectPath = path.join(currentPath, "pyproject.toml");

  if (!fs.existsSync(pyprojectPath)) {
    vscode.window.showInformationMessage("No pyproject.toml file found.");
    return false;
  }

  try {
    const { parse } = await import("smol-toml");

    const pyprojectContent = fs.readFileSync(pyprojectPath, "utf8");
    const parsedToml = parse(pyprojectContent) as unknown as AqoraProject;

    if (parsedToml.project && parsedToml.project.name === "submission") {
      return true;
    } else {
      vscode.window.showInformationMessage("This is not an Aqora project.");
      return false;
    }
  } catch (error) {
    vscode.window.showErrorMessage("Error reading pyproject.toml: " + error);
    return false;
  }
}
