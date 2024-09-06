import * as path from "path";
import { promises as fs } from "fs";
import xdgAppPaths from "xdg-app-paths";

const CREDENTIALS_FILE = "credentials.json";
const PATH_SUFFIX = "aqora";

class SystemError extends Error {
  constructor(
    public message: string,
    public detail: string,
  ) {
    super(message);
    this.name = "SystemError";
  }
}

async function defineConfigDir(): Promise<string> {
  const paths = xdgAppPaths({ name: PATH_SUFFIX });
  try {
    await fs.access(paths.data(), fs.constants.R_OK);
    return paths.data();
  } catch (dataPathError) {
    try {
      await fs.access(paths.config(), fs.constants.R_OK);
      return paths.config();
    } catch (configPathError) {
      throw new SystemError(
        "Could not find config directory",
        "This is a bug, please report it",
      );
    }
  }
}

async function configDir(): Promise<string> {
  const configDir = await defineConfigDir();
  try {
    // Create the directory (and any parent directories) if they don't exist
    await fs.mkdir(configDir, { recursive: true });
  } catch (err) {
    throw new SystemError(
      `Failed to create config directory at ${configDir}: ${err}`,
      "",
    );
  }

  return configDir;
}

async function credentialsPath(): Promise<string> {
  return path.join(await configDir(), CREDENTIALS_FILE);
}

export { configDir, credentialsPath };
