import * as vscode from "vscode";
import { exec } from "child_process";
import * as os from "os";
import { execute } from "./graphqlClient";
import { EntityConnection } from "./graphql/graphql";

export function activate(context: vscode.ExtensionContext) {
  console.log("HELLO");
  const disposable = vscode.commands.registerCommand("aqora.login", login);

  const entitiesDisposable = vscode.commands.registerCommand(
    "aqora.entities",
    async () => entities(),
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(entitiesDisposable);
}

function login() {
  const isWindows = os.platform() === "win32";
  const checkCommand = isWindows ? "where aqora" : "which aqora";

  exec(checkCommand, (error, stderr) => {
    if (error) {
      vscode.window
        .showErrorMessage(
          `aqora CLI tool not found in the system PATH: ${stderr}`,
          "Run `pipx install aqora-cli`",
          "Visit Documentation",
        )
        .then((selection) => {
          if (selection === "Visit Documentation") {
            vscode.env.openExternal(
              vscode.Uri.parse(
                "https://aqora.io/competitions/h2-groundstate-energy/data",
              ),
            );
          }
        });
      return;
    }

    const terminal = vscode.window.createTerminal("Login CLI");
    terminal.sendText("aqora login");
    terminal.show();
  });
}

const GET_ENTITIES = `
  query GET_ENTITIES {
    entities {
      edges {
        node {
          username
          bio
          id
        }
      }
    }
  }
`;

const transformEntitiesToQuickPick = (entities: EntityConnection["edges"]) => {
  return entities.map((location) => ({
    label: location.node.username,
    details: location.node.bio,
    link: location.node.id,
  }));
};

async function entities() {
  const [request, _cancel] = execute<{ entities: EntityConnection }>({
    query: GET_ENTITIES,
  });

  const entities = (await request).data?.entities;

  if (!entities?.edges) {
    return;
  }
  const entity = await vscode.window.showQuickPick(
    transformEntitiesToQuickPick(entities.edges),
    { matchOnDetail: true },
  );

  if (!entity) {
    return null;
  }

  vscode.window.showInformationMessage("Hello " + entity.label);
}

// This method is called when your extension is deactivated
export function deactivate() {}
