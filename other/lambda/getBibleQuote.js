import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  GetCommand,
} from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "BibleQuotes";

export const handler = async (event, context) => {
  let body;
  let VersionReference;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };
  
  try {
    if (event.requestContext.http.method === 'GET') {
      const parts = event.requestContext.http.path.split("/");
      const [ slash, command, version, reference, ...rest ] = parts;
      switch (command) {
        case "quote":
          VersionReference = '[' + version + ']' + reference;
          VersionReference = VersionReference.replace(/\+/g, ' ');
          console.log("versionReferecnce:", VersionReference);
          body = await dynamo.send(
            new GetCommand({
              TableName: tableName,
              Key: {
                VersionReference ,
              },
            })
          );
          body = body.Item;
          if (body == null)
            body = {};
          break;
        case "quotes":
          body = await dynamo.send(
            new ScanCommand({ TableName: tableName })
          );
          body = body.Items;
          break;
        default:
          throw new Error(`Unsupported route: "${event.requestContext.http.path}"`);
      }
    } else {
      throw new Error(`Unsupported method: "${event.requestContext.http.method}"`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};
