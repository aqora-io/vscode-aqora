import { access, readFile, stat } from "fs/promises";
import { join } from "path";
import { URL } from "url";
import { window, workspace } from "vscode";

export type AqoraProjectType = "submission" | "use_case";

export interface AqoraProject {
  readonly project: {
    readonly name: string;
    readonly version: string;
    readonly requiresPython: string;
    readonly dependencies: readonly string[];
  };
  readonly tool: {
    readonly aqora: {
      readonly type: AqoraProjectType;
      readonly competition: string;
    };
  };
}

export interface GlobalArgsProps {
  readonly url: URL;
  readonly noPrompt: boolean;

  aqoraUrl: () => URL;
  graphqlUrl: () => URL;
  isAqoraProject: (customPath?: string) => Promise<boolean>;
  aqoraProject: (customPath?: string) => Promise<AqoraProject | undefined>;
  currentPath: () => string | undefined;
  getExtensionPath: () => string;
  setExtensionPath: (path: string) => void;
}

export const GlobalArgs: GlobalArgsProps = (() => {
  const config = workspace.getConfiguration();
  const url = new URL(config.get<string>("aqora.url") || "https://aqora.io");
  const noPrompt = config.get<boolean>("aqora.noPrompt") ?? true;

  let extensionPath: string | undefined;

  const getCurrentPath = (): string | undefined => {
    const workspaceFolders = workspace.workspaceFolders;
    return workspaceFolders?.length
      ? workspaceFolders[0].uri.fsPath
      : undefined;
  };

  const getAqoraProject = async (
    customPath?: string,
  ): Promise<AqoraProject | undefined> => {
    const projectPath = customPath ?? getCurrentPath();

    if (!projectPath) {
      return undefined;
    }
    if (!(await stat(projectPath)).isDirectory()) {
      window.showErrorMessage("Invalid path.");
      return undefined;
    }

    const pyprojectPath = join(projectPath, "pyproject.toml");

    try {
      access(pyprojectPath);
    } catch (error) {
      window.showInformationMessage("No pyproject.toml file found.");
      return undefined;
    }

    try {
      const { parse } = await import("smol-toml");
      const pyprojectContent = await readFile(pyprojectPath, "utf8");
      return parse(pyprojectContent) as unknown as AqoraProject;
    } catch (error) {
      window.showErrorMessage("Error reading pyproject.toml: " + error);
      return undefined;
    }
  };

  const isAqoraProject = async (customPath?: string): Promise<boolean> => {
    const project = await getAqoraProject(customPath);
    return (
      project?.tool.aqora.type === "use_case"
      || project?.tool.aqora.type === "submission"
    );
  };

  return {
    get url() {
      return url;
    },
    get noPrompt() {
      return noPrompt;
    },
    aqoraUrl: () => new URL(url),
    graphqlUrl: () => new URL("/graphql", url),
    isAqoraProject,
    aqoraProject: getAqoraProject,
    currentPath: getCurrentPath,
    getExtensionPath: (): string => {
      if (!extensionPath) {
        throw new Error("Extension path is not set.");
      }
      return extensionPath;
    },
    setExtensionPath: (path: string): void => {
      extensionPath = path;
    },
  } as const;
})();
