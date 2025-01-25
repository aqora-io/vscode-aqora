import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import * as vscode from "vscode";
import { AqoraProjectType, GlobalArgs } from "../globalArgs";
import { Progress } from "./types";

type ContextKind = "test" | "upload" | "template" | "info";
type AqoraProjectKind = AqoraProjectType | "clone";

export interface ProgressCliCommandContext {
  path: string;
  projectKind: AqoraProjectKind;
  commandArgs: readonly [ContextKind, ...string[]];
}

const MESSAGE_DISPLAY_TIME = 2000;

export const progressCommand = async (
  context: Readonly<ProgressCliCommandContext>,
): Promise<void> => {
  await vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: `Running ${context.commandArgs[0]} ${context.projectKind}`,
      cancellable: true,
    },
    async (progress, token) => {
      await executeCommand(context, progress, token);
    },
  );
};

function executeCommand(
  context: ProgressCliCommandContext,
  progress: Progress,
  token: vscode.CancellationToken,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const abortController = new AbortController();
    const { signal } = abortController;

    token.onCancellationRequested(() => {
      abortController.abort();
      reject(
        new Error(
          `${context.commandArgs[0]} ${context.projectKind} process was canceled.`,
        ),
      );
    });

    const child = spawn(
      "aqora",
      [...context.commandArgs, GlobalArgs.noPrompt ? "--no-prompt" : ""],
      {
        env: {
          ...process.env,
          AQORA_URL: GlobalArgs.aqoraUrl().toString().slice(0, -1),
        },
        signal: signal,
        killSignal: "SIGSTOP",
        serialization: "json",
      },
    );

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");

    handleProcessOutput(
      child,
      progress,
      context.projectKind,
      context.commandArgs[0],
    );
    handleProcessExit(
      child,
      resolve,
      reject,
      context.projectKind,
      context.commandArgs[0],
    );
  });
}

function handleProcessOutput(
  child: ChildProcessWithoutNullStreams,
  progress: Progress,
  projectKind: AqoraProjectKind,
  contextKind: ContextKind,
) {
  const outputChannel = vscode.window.createOutputChannel(
    `${contextKind} ${projectKind}`,
  );
  let progressPercentage = 0;

  child.stdout.on("data", (data) => {
    const message = data.toString().trim();
    outputChannel.appendLine(message);
    outputChannel.show();
    progressPercentage = updateProgress(
      progressPercentage,
      progress,
      "In progress...",
    );
  });

  child.stderr.on("data", (data) => {
    const message = data.toString().trim();
    outputChannel.appendLine(message);
    outputChannel.show();
    progressPercentage = updateProgress(
      progressPercentage,
      progress,
      "Oups... something went wrong",
    );
  });
}

function handleProcessExit(
  child: ChildProcessWithoutNullStreams,
  resolve: () => void,
  reject: (error: Error) => void,
  projectKind: AqoraProjectKind,
  contextKind: ContextKind,
) {
  child.on("close", (code: number) => {
    code === 0
      ? resolve()
      : reject(
        new Error(
          `${projectKind} ${contextKind} failed with exit code ${code}.`,
        ),
      );
  });

  child.on("error", (error: Error) => {
    reject(error);
  });
}

function updateProgress(
  progressPercentage: number,
  progress: Progress,
  message: string,
) {
  if (progressPercentage < 100) {
    progressPercentage += 1;
  }

  progress.report({ increment: progressPercentage, message });

  setTimeout(() => {
    progress.report({ increment: progressPercentage, message: "" });
  }, MESSAGE_DISPLAY_TIME);
  return progressPercentage;
}
