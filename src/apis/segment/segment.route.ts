import { connectPostgres } from '../../postgres';
import * as Controller from './segment.controller';
import { resError, resSuccess } from '../utils';

export async function FunctionSegmentChart(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectPostgres();
  try {
    const query = event?.queryStringParameters || {};
    const data = await Controller.getSegmentChart(query);
    return callback(null, resSuccess(data));
  } catch (e) {
    console.log('------error-----');
    console.log(e);
    return callback(null, resError(e));
  }
}

export async function FunctionSegmentCriterias(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectPostgres();
  try {
    const query = event?.queryStringParameters || {};
    const data = await Controller.getSegmentCriterias(query);
    return callback(null, resSuccess(data));
  } catch (e) {
    console.log('------error-----');
    console.log(e);
    return callback(null, resError(e));
  }
}

export async function FunctionSegmentTypes(event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;
  await connectPostgres();
  try {
    const query = event?.queryStringParameters || {};
    const data = await Controller.getSegmentTypes(query);
    return callback(null, resSuccess(data));
  } catch (e) {
    console.log('------error-----');
    console.log(e);
    return callback(null, resError(e));
  }
}
