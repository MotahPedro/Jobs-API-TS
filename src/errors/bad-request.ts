import {StatusCodes} from 'http-status-codes'
import {CustomAPIError} from './custom-api'

export class BadRequestError extends CustomAPIError {
  constructor(message: string) {
    statusCode:Number
    const statusCode = StatusCodes.BAD_REQUEST;
    super(message, statusCode);
  }
}

// JS Counterpart

// const { StatusCodes } = require('http-status-codes');
// const CustomAPIError = require('./custom-api');

// class BadRequestError extends CustomAPIError {
//   constructor(message) {
//     super(message);
//     this.statusCode = StatusCodes.BAD_REQUEST;
//   }
// }

// module.exports = BadRequestError;