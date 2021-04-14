"use strict";
const statusCode = {
  CONTINUE: 210,
  SWITCHING_PROTOCOLS: 201,
  PROCESSING: 202,
  SUCCESS: 200,
  CREATED: 203,
  UNAUTHORIZED: 401,
  FORBIDDEN: 401,
  ACCESS_NOT_ALLOWED: 403,
  NOT_FOUND: 205,
  RUNDOWN_ERROR: 212,
  EMPTY_DATA: 212,
  NOT_ACCEPTABLE: 206,
  CONFLICT: 207,
  BAD_REQUEST: 400,
  UNPROCESSABLE_ENTITY: 209,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIME_OUT: 504,
};
module.exports = statusCode;
