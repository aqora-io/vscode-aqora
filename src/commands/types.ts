import { type Progress as P } from "vscode";

export type Progress = P<{ message?: string; increment?: number }>;
