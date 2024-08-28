import * as fs from 'fs/promises';
import * as os from 'os';
import * as path from 'path';

const AQORA_DIRNAME = ".aqora";

async function configDir(): Promise<string> {
    let basePath: string | undefined;

    if (process.env.XDG_CONFIG_HOME) {
        basePath = process.env.XDG_CONFIG_HOME;
    } else {
        basePath = path.join(os.homedir(), '.config');
    }

    if (!basePath) {
        throw new Error("Could not determine config directory");
    }

    const configPath = path.join(basePath, AQORA_DIRNAME);

    try {
        await fs.mkdir(configPath, { recursive: true });
        return configPath;
    } catch (err) {
        throw new Error(`Failed to create config directory at ${configPath}: ${err}`);
    }
}

export { configDir };