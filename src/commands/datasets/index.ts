import * as vscode from "vscode";
import { list } from "./list";

const listDisposable = vscode.commands.registerCommand(
  "aqora.dataset.list",
  list,
);

export const datasetDisposables = [listDisposable];
