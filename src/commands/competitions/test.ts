import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { askForSingleFolderPath } from "../utils";
import * as vscode from "vscode";
import { GlobalArgsImpl } from "../../globalArgs";

type Progress = vscode.Progress<{ message?: string; increment?: number }>;

async function testSubmission() {
  const isAqoraProject = await GlobalArgsImpl.getInstance().isAqoraProject();
  const currentPath = GlobalArgsImpl.getInstance().currentPath();

  if (isAqoraProject && currentPath) {
    progressCommand(currentPath);
    return;
  }

  const competitionPath = await askForSingleFolderPath();

  if (!competitionPath) {
    vscode.window.showErrorMessage("Please specify a competition folder.");
    return;
  }

  progressCommand(competitionPath);
}

const progressCommand = (competitionPath: string): void => {
  vscode.window.withProgress(
    {
      location: vscode.ProgressLocation.Notification,
      title: "Running Test Submission",
      cancellable: true,
    },
    (progress, token) => {
      return executeTestCommand(competitionPath, progress, token);
    },
  );
};

function executeTestCommand(
  competitionPath: string,
  progress: Progress,
  token: vscode.CancellationToken,
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const child = spawn("aqora", ["test", "-p", competitionPath], {
      stdio: "pipe",
    });

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");

    token.onCancellationRequested(() => {
      child.kill();
      reject(new Error("Test submission process was canceled."));
    });

    handleProcessOutput(child, progress);
    handleProcessExit(child, resolve, reject);
  });
}

function handleProcessOutput(
  child: ChildProcessWithoutNullStreams,
  progress: Progress,
) {
  const outputChannel = vscode.window.createOutputChannel("Test Submission");
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
) {
  child.on("exit", (code: number) => {
    if (code === 0) {
      vscode.window.showInformationMessage(
        "Test submission completed successfully.",
      );
      resolve();
    } else {
      reject(new Error(`Test submission failed with exit code ${code}.`));
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

export const testSubmissionDisposable = vscode.commands.registerCommand(
  "aqora.test",
  testSubmission,
);

const MESSAGE_DISPLAY_TIME = 2000;
