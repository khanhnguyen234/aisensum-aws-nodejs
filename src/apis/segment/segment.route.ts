import { connectPostgres } from '../../postgres';
import * as Controller from './segment.controller';

export async function FunctionSegmentChart(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectPostgres();
  try {
    const query = event?.queryStringParameters || {};
    const data = await Controller.segmentChart(query);
    return callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Headers':
          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,PUT,DELETE',
      },
      isBase64Encoded: false,
      body: JSON.stringify({ data }),
    });
  } catch (e) {
    console.log('------error-----');
    console.log(e);
    return callback(null, {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Headers':
          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS,POST,PUT,DELETE',
      },
      isBase64Encoded: false,
      body: JSON.stringify(e),
    });
  }
}
