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
  //console.log("Got here");
  console.log("event:", event);
  //console.log("path:", event.requestContext.http.path);
  //console.log("method:", event.requestContext.http.method);
  
  try {
    if (event.requestContext.http.method === 'GET') {
      //console.log("We have GET request");
      const parts = event.requestContext.http.path.split("/");
      //console.log("parts:", parts);
      const [ slash, command, version, reference, ...rest ] = parts;
      //console.log("command:", command, ", version:", version, ", reference:", reference, ", rest:", rest, ", slash:", slash);
      switch (command) {
        case "quote":
          //console.log("We have specific request");
          //console.log("reference:", reference);
          //console.log("version:", version);
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
          //console.log('body', body);
          body = body.Item;
          if (body == null)
            body = {};
          break;
        case "quotes":
          //console.log("We have generic request");
          body = await dynamo.send(
            new ScanCommand({ TableName: tableName })
          );
          //console.log('body', body);
          body = body.Items;
          break;
        default:
          //console.log("We have unknown request");
          throw new Error(`Unsupported route: "${event.requestContext.http.path}"`);
      }
    } else {
      //console.log(`We have unsupported method: "${event.requestContext.http.method}"`);
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