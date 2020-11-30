import { STATUS_CODES, DEFAULT_HEADERS } from './const';

export function resSuccess(data, isBase64Encoded = false) {
  return {
    statusCode: STATUS_CODES.SUCCESS,
    headers: DEFAULT_HEADERS,
    isBase64Encoded,
    body: JSON.stringify({ data }),
  };
}

export function resError(data, isBase64Encoded = false) {
  return {
    statusCode: STATUS_CODES.INTERNAL_SERVER_ERROR,
    headers: DEFAULT_HEADERS,
    isBase64Encoded,
    body: JSON.stringify({ data }),
  };
}
