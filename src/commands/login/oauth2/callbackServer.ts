import * as fs from "fs/promises";
import * as http from "http";
import * as path from "path";
import * as vscode from "vscode";
import { GlobalArgs } from "../../../globalArgs";

const LOGIN_REPONSE_HTML_FILE = "login_response.html";

const createServer = (
  port: number,
  onRequest: (
    req: http.IncomingMessage,
    res: http.ServerResponse,
  ) => Promise<void>,
) => {
  return new http.Server((req, res) => {
    onRequest(req, res).catch((err) => {
      res.writeHead(500);
      res.end("Internal Server Error");
      console.error(err);
    });
  }).listen(port, () =>
    console.info(
      `Listening for OAuth callback on http://127.0.0.1:${port}/callback`,
    ));
};

export const getAvailablePort = async (): Promise<number> => {
  const tempServer = http.createServer();
  return new Promise((resolve, reject) => {
    tempServer.listen(0, () => {
      const address = tempServer.address();
      if (address && typeof address === "object") {
        const port = address.port;
        tempServer.close(() => resolve(port));
      } else {
        reject(new Error("Failed to get available port"));
      }
    });

    tempServer.on("error", (error: any) => reject(new Error(`Error finding available port: ${error.message}`)));
  });
};

const loadHtmlFile = async (filePath: string): Promise<string> => {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch (err) {
    throw new Error(`Failed to load HTML file: ${err}`);
  }
};

const handleCallbackRequest = async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
): Promise<void> => {
  if (!req.url?.startsWith("/callback")) {
    res.writeHead(404);
    res.end("Not Found");
    return;
  }

  const urlParams = new URLSearchParams(req.url.split("?")[1]);
  const authorizationCode = urlParams.get("code");

  if (!authorizationCode) {
    res.writeHead(400);
    res.end("Invalid callback request");
    throw new Error("No authorization code found");
  }

  const htmlFilePath = vscode.Uri.file(
    path.join(GlobalArgs.getExtensionPath(), "public", LOGIN_REPONSE_HTML_FILE),
  );
  const htmlContent = await loadHtmlFile(htmlFilePath.path);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlContent);
};

export const startLocalServerForCallback = async (
  port: number,
  onClose?: () => void,
): Promise<string | undefined> => {
  const server = createServer(port, handleCallbackRequest).close(onClose);

  return new Promise((resolve, reject) => {
    server.on("close", () => {
      resolve(undefined);
    });

    server.on("error", (err) => {
      reject(new Error(`Failed to start server: ${err.message}`));
    });
  });
};
