import * as vscode from "vscode";
import { progressCommand } from "../progressCliCommand";
import { currentOrSelectedProject, isAqoraInstalled } from "../utils";
import { gql } from "src/graphql";
import { client as gqlClient } from "../../graphqlClient";
import {
  Competition_Entity_Submission_StatusSubscription,
  Competition_Entity_Submission_StatusSubscriptionVariables,
  UploadQuery,
  UploadQueryVariables,
} from "src/graphql/graphql";

const COMPETITION_ENTITY_SUBMISSION_STATUS = gql(`
  subscription COMPETITION_ENTITY_SUBMISSION_STATUS(
    $competitionId: ID!
    $entityId: ID!
  ) {
    projectVersionStatusUpdate(
      competitionId: $competitionId
      entityId: $entityId
    ) {
      latest
      status
      evaluation {
        max
      }
    }
  }
`);

const UPLOAD = gql(`
  query UPLOAD ($slug: String!) {
    viewer {
      id
    }
    competitionBySlug(slug: $slug) {
      id
    }
  }
`);

async function uplaod() {
  const client = await gqlClient;
  if (await isAqoraInstalled()) {
    await currentOrSelectedProject(
      async ({ tool }, projectPath, projectKind) => {
        progressCommand({
          path: projectPath,
          projectKind,
          commandArgs: ["upload", "-p", projectPath],
        });

        const uploadQueryVariables: UploadQueryVariables = {
          slug: tool.aqora.competition,
        };

        const {
          data: { competitionBySlug, viewer },
        } = await client.query<UploadQuery>({
          query: UPLOAD,
          variables: uploadQueryVariables,
        });

        if (!competitionBySlug || !viewer) {
          vscode.window.showErrorMessage(
            "Failed to fetch competition or viewer data.",
          );
          return;
        }

        const competitionEntitySubmissionStatusVariables: Competition_Entity_Submission_StatusSubscriptionVariables =
          {
            competitionId: competitionBySlug.id,
            entityId: viewer.id,
          };

        vscode.window.withProgress(
          {
            location: vscode.ProgressLocation.Notification,
            title: "Uploading Project...",
            cancellable: true,
          },
          async (progress, token) => {
            const subscription = client
              .subscribe<Competition_Entity_Submission_StatusSubscription>({
                query: COMPETITION_ENTITY_SUBMISSION_STATUS,
                variables: competitionEntitySubmissionStatusVariables,
              })
              .subscribe({
                next: (result) => {
                  console.log("BIG RESULT ", result);
                  const statusUpdate = result.data?.projectVersionStatusUpdate;

                  if (!statusUpdate) {
                    return;
                  }

                  const { evaluation, status } = statusUpdate;

                  if (evaluation?.max) {
                    const progressMessages = {
                      AWAITING_APPROVAL: "Awaiting approval...",
                      AWAITING_EVALUATION: "Awaiting evaluation...",
                      AWAITING_VALIDATION: "Awaiting validation...",
                      ERROR: "An error occurred. Please check the details.",
                      OK: `Progress: 100.00%`,
                      "%future added value": "Processing unknown status...",
                    };

                    if (status in progressMessages) {
                      progress.report({ message: progressMessages[status] });
                    } else {
                      progress.report({
                        message: `Status: ${status} - Processing...`,
                      });
                    }

                    if (status === "OK") {
                      progress.report({ increment: 100 });
                      vscode.window.showInformationMessage("Upload complete!");
                      subscription.unsubscribe();
                      return;
                    }
                    if (status === "ERROR") {
                      vscode.window.showErrorMessage(
                        "An error occurred during the upload process.",
                      );
                      subscription.unsubscribe();
                    }
                  }
                },
                error: (error) => {
                  vscode.window.showErrorMessage(
                    `Error during subscription: ${error.message}`,
                  );
                  subscription.unsubscribe();
                },
                complete: () => {
                  vscode.window.showInformationMessage(
                    "Subscription completed.",
                  );
                },
              });

            token.onCancellationRequested(() => {
              subscription.unsubscribe();
              vscode.window.showWarningMessage("Upload process was canceled.");
            });
          },
        );
      },
    );
  }
}

export const uploadDisposable = vscode.commands.registerCommand(
  "aqora.uplaod",
  uplaod,
);
