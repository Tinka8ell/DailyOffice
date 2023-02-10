import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
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
  console.log("Got here");
  console.log("event.routeKey:", event.routeKey);

  try {
    switch (event.routeKey) {
      case "DELETE /quote/{version}/{reference}":
        VersionReference = '[' + event.pathParameters.version + ']' + event.pathParameters.reference;
        VersionReference = VersionReference.replace(/\+/g, ' ');
        await dynamo.send(
          new DeleteCommand({
            TableName: tableName,
            Key: {
              VersionReference,
            },
          })
        );
        body = `Deleted quote: ${event.pathParameters.reference} - ${event.pathParameters.version}`;
        break;
      case "GET /quote/{version}/{reference}":
        console.log("reference:", event.pathParameters.reference);
        console.log("version:", event.pathParameters.version);
        VersionReference = '[' + event.pathParameters.version + ']' + event.pathParameters.reference;
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
        console.log('body', body);
        body = body.Item;
        if (body == null)
          body = {};
        break;
      case "GET /quotes":
        body = await dynamo.send(
          new ScanCommand({ TableName: tableName })
        );
        console.log('body', body);
        body = body.Items;
        break;
      case "PUT /quote":
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: tableName,
            Item: {
              VersionReference: '[' + requestJSON.version + ']' + requestJSON.reference,
              version: requestJSON.version,
              reference: requestJSON.reference,
              paragraph: requestJSON.paragraph
            },
          })
        );
        body = `Put quote: ${requestJSON.reference} - ${requestJSON.version}`;
        break;
      default:
        throw new Error(`Unsupported route: "${event.routeKey}", parameters: ${ Object.keys(event.pathParameters).join() }, reference: ${event.pathParameters.reference}`);
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