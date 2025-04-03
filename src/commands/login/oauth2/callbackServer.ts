import * as fs from "fs/promises";
import * as http from "http";
import * as path from "path";
import * as vscode from "vscode";
import { GlobalArgs } from "../../../globalArgs";

const LOGIN_REPONSE_HTML_FILE = "login_response.html";

export function getAvailablePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const tempServer = http.createServer();

    tempServer.listen(0, () => {
      const address = tempServer.address();
      if (address && typeof address === "object") {
        const port = address.port;
        tempServer.close(() => resolve(port));
      } else {
        reject(new Error("Failed to get available port"));
      }
    });

    tempServer.on("error", (error: any) => {
      reject(new Error(`Error finding available port: ${error.message}`));
    });
  });
}

const loadHtmlFile = async (filePath: string): Promise<string> => {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (err) {
    throw new Error(`Failed to load HTML file: ${err}`);
  }
};

export function startLocalServerForCallback(port: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      if (req.url?.startsWith("/callback")) {
        const urlParams = new URLSearchParams(req.url.split("?")[1]);
        const authorizationCode = urlParams.get("code");

        if (!authorizationCode) {
          res.writeHead(400);
          res.end("Invalid callback request");
          reject(new Error("No authorization code found"));
          return;
        }
        const htmlFilePath = vscode.Uri.file(
          path.join(
            GlobalArgs.getExtensionPath(),
            "public",
            LOGIN_REPONSE_HTML_FILE,
          ),
        );
        const htmlContent = await loadHtmlFile(htmlFilePath.path);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlContent);
        server.close();

        resolve(authorizationCode);
        server.close();
      } else {
        res.writeHead(404);
        res.end("Not Found");
      }
    });

    server.listen(port, () => {
      console.log(
        `Listening for OAuth callback on ${server.address()}:/callback`,
      );
    });

    server.on("error", (error: any) => {
      reject(new Error(`Failed to start server: ${error.message}`));
    });

    server.on("close", () => console.info("Server closed"));
  });
}
