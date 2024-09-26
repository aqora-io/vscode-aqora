import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import * as vscode from "vscode";
import { AqoraProjectType } from "../globalArgs";

type Progress = vscode.Progress<{ message?: string; increment?: number }>;
type ContextKind = "Test" | "Upload";

export interface ProgressCliCommandContext {
  path: string;
  projectKind: AqoraProjectType;
  kind: ContextKind;
  commandArgs: readonly string[];
}

export const progressCommand = (
  context: Readonly<ProgressCliCommandContext>,
): void => {
  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: `Running ${context.kind} ${context.projectKind}`,
      cancellable: true,
    },
    (progress, token) => {
      return executeTestCommand(context, progress, token);
    },
  );
};

function executeTestCommand(
  context: ProgressCliCommandContext,
  progress: Progress,
  token: vscode.CancellationToken,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const child = spawn("aqora", context.commandArgs, {
      stdio: "pipe",
    });

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");

    token.onCancellationRequested(() => {
      child.kill();
      reject(new Error("Test submission process was canceled."));
    });

    handleProcessOutput(child, progress, context.projectKind, context.kind);
    handleProcessExit(
      child,
      resolve,
      reject,
      context.projectKind,
      context.kind,
    );
  });
}

function handleProcessOutput(
  child: ChildProcessWithoutNullStreams,
  progress: Progress,
  projectKind: AqoraProjectType,
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
      "Oups... something got wrong",
    );
  });
}

function handleProcessExit(
  child: ChildProcessWithoutNullStreams,
  resolve: () => void,
  reject: (error: Error) => void,
  projectKind: AqoraProjectType,
  contextKind: ContextKind,
) {
  child.on("exit", (code: number) => {
    if (code === 0) {
      vscode.window.showInformationMessage(
        `${contextKind} ${projectKind} completed successfully.`,
      );
      resolve();
    } else {
      reject(
        new Error(
          `${projectKind} ${contextKind} failed with exit code ${code}.`,
        ),
      );
    }
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

const MESSAGE_DISPLAY_TIME = 2000;
