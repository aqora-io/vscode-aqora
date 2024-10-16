import { decodeAsync } from "@msgpack/msgpack";
import * as fs from "fs";
import { projectLastRunResult } from "../../dirs";
import { Readable } from "stream";
import { Parser as PickleParser } from "pickleparser";

interface ProjectRunResult {
  score: number;
  numInputs: number;
  time: Date;
  useCaseVersion: string;
}

function unPickleScore(scoreBuffer: string): number {
  const binaryBuffer = Buffer.from(scoreBuffer, "binary");
  return new PickleParser().parse(binaryBuffer) as number;
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
            console.log(
              unPickleScore(unpackedData.score as string),
              "THIS THE SCORE",
            );
            const result: ProjectRunResult = {
              score: unPickleScore(unpackedData.score as string),
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
