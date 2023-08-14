import { StatusCodes } from 'http-status-codes'
import {CustomAPIError} from './custom-api'

export class UnauthenticatedError extends CustomAPIError {
  constructor(message: string) {
    statusCode: Number
    const statusCode = StatusCodes.UNAUTHORIZED
    super(message, statusCode);
  }
}


// JS Counterpart

// const { StatusCodes } = require('http-status-codes');
// const CustomAPIError = require('./custom-api');

// class UnauthenticatedError extends CustomAPIError {
//   constructor(message) {
//     super(message);
//     this.statusCode = StatusCodes.UNAUTHORIZED;
//   }
// }

// module.exports = UnauthenticatedError;