import * as fs from "fs";
import * as p from "path";
import { URL } from "url";
import * as vscode from "vscode";

export type AqoraProjectType = "submission" | "use_case";

interface AqoraProject {
  project: {
    name: string;
    version: string;
    requiresPython: string;
    dependencies: string[];
  };
  tool: {
    aqora: {
      type: AqoraProjectType;
    };
  };
}

export interface GlobalArgs {
  url: URL;

  aqoraUrl(): URL;
  graphqlUrl(): URL;
  isAqoraProject(customPath?: string): Promise<boolean>;
  aqoraProject(customPath?: string): Promise<AqoraProject | undefined>;
  currentPath(): string | undefined;
  getExtensionPath(): string;
}

export class GlobalArgsImpl implements GlobalArgs {
  url: URL;
  extensionPath: string | undefined;
  private static instance: GlobalArgsImpl;

  private constructor() {
    this.url = new URL(
      vscode.workspace.getConfiguration().get("aqora.url")
        || "https://aqora.io",
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
  isAqoraProject(customPath?: string): Promise<boolean> {
    return isAqoraProject(customPath);
  }
  aqoraProject(customPath?: string): Promise<AqoraProject | undefined> {
    return getAqoraProject(customPath);
  }
  currentPath(): string | undefined {
    return getCurrentPath();
  }
  setExtensionPath(path: string): void {
    this.extensionPath = path;
  }
  getExtensionPath(): string {
    if (!this.extensionPath) {
      throw new Error("Extension path is not set.");
    }
    return this.extensionPath;
  }
}

function getCurrentPath() {
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (!workspaceFolders || workspaceFolders.length === 0) {
    return;
  }

  return workspaceFolders[0].uri.path;
}

async function getAqoraProject(
  customPath?: string,
): Promise<AqoraProject | undefined> {
  const path = customPath ?? getCurrentPath();

  if (!path) {
    return;
  }

  if (!fs.statSync(path).isDirectory()) {
    vscode.window.showErrorMessage("Invalid path.");
    return;
  }

  const pyprojectPath = p.join(path, "pyproject.toml");

  if (!fs.existsSync(pyprojectPath)) {
    vscode.window.showInformationMessage("No pyproject.toml file found.");
  }

  try {
    const { parse } = await import("smol-toml");
    const pyprojectContent = fs.readFileSync(pyprojectPath, "utf8");
    return parse(pyprojectContent) as unknown as AqoraProject;
  } catch (error) {
    vscode.window.showErrorMessage("Error reading pyproject.toml: " + error);
    return;
  }
}

async function isAqoraProject(customPath?: string): Promise<boolean> {
  const aqoraProject = await getAqoraProject(customPath);

  if (!aqoraProject) {
    return false;
  }

  if (
    aqoraProject.tool.aqora.type === "use_case"
    || aqoraProject.tool.aqora.type === "submission"
  ) {
    return true;
  }

  return false;
}
