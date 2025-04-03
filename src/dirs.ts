import { promises as fs } from "fs";
import * as path from "path";
import xdgAppPaths from "xdg-app-paths";
import { GlobalArgs } from "./globalArgs";

const CREDENTIALS_FILE = "credentials.json";
const PATH_SUFFIX = "aqora";
const AQORA_DIRNAME = ".aqora";
const VENV_DIRNAME = "venv";
const BIN_PATH = "bin";
const LAST_RUN_DIRNAME = "last_run";

class SystemError extends Error {
  constructor(
    public message: string,
    public detail: string,
  ) {
    super(message);
    this.name = "SystemError";
  }
}

export async function configDir(): Promise<string> {
  console.log("READDDDDDD")
  const paths = xdgAppPaths({ name: PATH_SUFFIX });

  if (await isAccessible(paths.data())) {
    return paths.data();
  }

  try {
    await fs.mkdir(paths.data(), { recursive: true });
    return paths.data();
  } catch (err) {
    throw new SystemError(
      "Could not find or create data directory",
      "This is a bug, please report it",
    );
  }
}


export async function isAccessible(path: string): Promise<boolean> {
  try {
    await fs.access(path, fs.constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

export async function credentialsPath(): Promise<string> {
  return path.join(await GlobalArgs.getConfigHome(), CREDENTIALS_FILE);
}

export function projectConfigDir(projectDir: string): string {
  return path.join(projectDir, AQORA_DIRNAME);
}

export function projectVenvDir(projectDir: string): string {
  return path.join(projectDir, VENV_DIRNAME);
}

export function projectBinDir(projectDir: string): string {
  return path.join(projectVenvDir(projectDir), BIN_PATH);
}

export function projectLastRunDir(projectDir: string): string {
  return path.join(projectConfigDir(projectDir), LAST_RUN_DIRNAME);
}

export function projectLastRunResult(projectDir: string): string {
  return path.join(projectLastRunDir(projectDir), "result.msgpack");
}
