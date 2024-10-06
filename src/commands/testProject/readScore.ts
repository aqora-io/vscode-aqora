import { decodeAsync } from "@msgpack/msgpack";
import * as fs from "fs";
import { projectLastRunResult } from "../../dirs";
import { Readable } from "stream";

interface ProjectRunResult {
  score: Buffer;
  numInputs: number;
  time: Date;
  useCaseVersion: string;
}

export function readProjectLastRunResult(
  projectDir: string,
): Promise<ProjectRunResult> {
  return new Promise((resolve, reject) => {
    const resultFilePath = projectLastRunResult(projectDir);

    fs.readFile(resultFilePath, (err, data) => {
      if (err) {
        reject(`Error reading file: ${err}`);
        return;
      }

      try {
        const buffer = Buffer.from(data);

        const readableStream = new Readable({
          read() {
            this.push(buffer);
            this.push(null);
          },
        });

        const unpackedDataPromise = decodeAsync(readableStream);

        unpackedDataPromise
          .then((unpackedData: any) => {
            const result: ProjectRunResult = {
              score: unpackedData.score as Buffer,
              numInputs: unpackedData.num_inputs as number,
              time: new Date(unpackedData.time),
              useCaseVersion: unpackedData.use_case_version as string,
            };
            resolve(result);
          })
          .catch((decodeErr) =>
            reject(`Error decoding MessagePack stream: ${decodeErr}`),
          );
      } catch (decodeErr) {
        reject(`Error decoding MessagePack file: ${decodeErr}`);
      }
    });
  });
}
