// This file is created by egg-ts-helper@2.1.0
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportError = require('../../../app/middleware/error');
import ExportJwtAuth = require('../../../app/middleware/jwtAuth');

declare module 'egg' {
  interface IMiddleware {
    error: typeof ExportError;
    jwtAuth: typeof ExportJwtAuth;
  }
}
