import { gql } from "src/graphql";
import { Competition_Entity_Submission_StatusSubscription, UploadQuery } from "src/graphql/graphql";
import * as vscode from "vscode";
import { client as gqlClient } from "../../graphqlClient";
import { progressCommand } from "../progressCliCommand";
import { Progress } from "../types";
import { currentOrSelectedProject, isAqoraInstalled } from "../utils";

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
        score
        error
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

type EvaluationStatus = Competition_Entity_Submission_StatusSubscription["projectVersionStatusUpdate"]["status"];

function sendEvaluationMessage(
  progress: Progress,
  status: EvaluationStatus,
  score?: number | null,
  error?: string | null,
) {
  console.log("DEBUG: ", status, score, error);
  const messages: Record<
    EvaluationStatus,
    { message: string; increment: number }
  > = {
    AWAITING_APPROVAL: {
      message: "Hang tight! Approval in progress...",
      increment: 15,
    },
    AWAITING_EVALUATION: {
      message: "Evaluation queue... You're almost there!",
      increment: 45,
    },
    AWAITING_VALIDATION: {
      message: "Double-checking everything... Sit tight!",
      increment: 80,
    },
    OK: { message: "Boom! You're at 100%! Great job!", increment: 100 },
    ERROR: {
      message: "Oops! Something went wrong.",
      increment: 0,
    },
    "%future added value": {
      message: "Hmm... Processing unknown status...",
      increment: 0,
    },
  };
  const { message, increment } = messages[status];

  status === "OK"
    && vscode.window.showInformationMessage(message, {
      detail: `You crushed it with a score of ${score} on the Aqora platform!`,
      modal: false,
    });

  status === "ERROR"
    && vscode.window.showErrorMessage(message, {
      detail: error ?? "",
      modal: false,
    });

  progress.report({ message, increment });
}

async function uplaod() {
  const client = await gqlClient;
  if (!(await isAqoraInstalled())) {
    return;
  }
  await currentOrSelectedProject(async ({ tool }, projectPath, projectKind) => {
    progressCommand({
      path: projectPath,
      projectKind,
      commandArgs: ["upload", "-p", projectPath],
    });

    const {
      data: { competitionBySlug, viewer },
      error,
    } = await client.query<UploadQuery>({
      query: UPLOAD,
      variables: {
        slug: tool.aqora.competition,
      },
    });

    if (!competitionBySlug || !viewer) {
      vscode.window.showErrorMessage("Oops! Something went wrong.", {
        detail: error?.message ?? "",
      });
      return;
    }

    vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: "Hold on, your project is taking flight!",
        cancellable: true,
      },
      async (progress, token) => {
        const subscription = client
          .subscribe<Competition_Entity_Submission_StatusSubscription>({
            query: COMPETITION_ENTITY_SUBMISSION_STATUS,
            variables: {
              competitionId: competitionBySlug.id,
              entityId: viewer.id,
            },
          })
          .subscribe({
            next: ({ data }) => {
              const statusUpdate = data?.projectVersionStatusUpdate;
              if (!statusUpdate) {
                subscription.unsubscribe();
                return;
              }
              const { evaluation, status } = statusUpdate;
              sendEvaluationMessage(
                progress,
                status,
                evaluation?.score,
                evaluation?.error,
              );
              if (status === "ERROR" || status === "OK") {
                subscription.unsubscribe();
                return;
              }
            },
            error: ({ message }) => {
              vscode.window.showErrorMessage("Oops! Something went wrong.", {
                detail: message ?? "",
                modal: false,
              });
              subscription.unsubscribe();
            },
            complete: () => {
              subscription.unsubscribe();
            },
          });

        token.onCancellationRequested(() => subscription.unsubscribe());
      },
    );
  });
}

export const uploadDisposable = vscode.commands.registerCommand(
  "aqora.uplaod",
  uplaod,
);
