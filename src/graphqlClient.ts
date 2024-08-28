import { ExecutionResult } from "graphql";
import { createClient, RequestParams } from "graphql-http";
import { GlobalArgsImpl } from "./globalArgs";

const endpoint = GlobalArgsImpl.getInstance().graphqlUrl().toString();
const client = createClient({ url: endpoint });

function execute<Data, Extensions = {}>(
  params: RequestParams,
): [request: Promise<ExecutionResult<Data, Extensions>>, cancel: () => void] {
  let cancel!: () => void;
  const request = new Promise<ExecutionResult<Data, Extensions>>(
    (resolve, reject) => {
      let result: ExecutionResult<Data, Extensions>;
      cancel = client.subscribe<Data, Extensions>(params, {
        next: (data) => (result = data),
        error: reject,
        complete: () => resolve(result),
      });
    },
  );
  return [request, cancel];
}

export { client, execute };

