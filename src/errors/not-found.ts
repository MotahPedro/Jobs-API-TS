import { StatusCodes } from 'http-status-codes'
import {CustomAPIError} from './custom-api'

export class NotFoundError extends CustomAPIError {
  constructor(message:string) {
    statusCode: Number
    const statusCode = StatusCodes.NOT_FOUND;
    super(message, statusCode);
  }
}

// JS Counterpart

// const { StatusCodes } = require('http-status-codes');
// const CustomAPIError = require('./custom-api');

// class NotFoundError extends CustomAPIError {
//   constructor(message) {
//     super(message);
//     this.statusCode = StatusCodes.NOT_FOUND;
//   }
// }

// module.exports = NotFoundError;