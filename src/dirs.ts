import * as os from "os";
import * as path from "path";
import { promises as fs } from "fs";

const CREDENTIALS_FILE = "credentials.json";

class SystemError extends Error {
  constructor(
    public message: string,
    public detail: string,
  ) {
    super(message);
    this.name = "SystemError";
  }
}

async function configDir(): Promise<string> {
  function getPlatformConfigDir(): string | null {
    const platform = os.platform();

    if (platform === "win32") {
      return process.env.APPDATA || null;
    } else if (platform === "darwin") {
      return path.join(os.homedir(), "Library", "Application Support");
    } else if (platform === "linux") {
      return process.env.XDG_CONFIG_HOME || path.join(os.homedir(), ".config");
    }

    return null;
  }

  const configDir = getPlatformConfigDir();

  if (!configDir) {
    throw new SystemError(
      "Could not find config directory",
      "This is a bug, please report it",
    );
  }

  // Append the "aqora" subdirectory to the config path
  const aqoraConfigDir = path.join(configDir, "aqora");

  try {
    // Create the directory (and any parent directories) if they don't exist
    await fs.mkdir(aqoraConfigDir, { recursive: true });
  } catch (err) {
    throw new SystemError(
      `Failed to create config directory at ${aqoraConfigDir}: ${err}`,
      "",
    );
  }

  return aqoraConfigDir;
}

async function credentialsPath(): Promise<string> {
  return path.join(await configDir(), CREDENTIALS_FILE);
}

export { configDir, credentialsPath };
