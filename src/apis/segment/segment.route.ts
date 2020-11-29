import { connectPostgres } from '../../postgres';
import * as Controller from './segment.controller';

export async function FunctionSegmentChart(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectPostgres();
  try {
    const data = await Controller.segmentChart();
    return callback(null, {
      statusCode: 200,
      headers: {},
      isBase64Encoded: false,
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log('------error-----');
    console.log(e);
    return callback(null, {
      statusCode: 500,
      headers: {},
      isBase64Encoded: false,
      body: JSON.stringify(e),
    });
  }
}

FunctionSegmentChart({}, {}, () => {});
