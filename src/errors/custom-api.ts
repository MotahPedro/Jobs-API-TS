export class CustomAPIError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const createCustomError = (statusCode: number, message: string): CustomAPIError => {
    return new CustomAPIError(message, statusCode);
};

// JS Counterpart

// class CustomAPIError extends Error {
//     constructor(message) {
//       super(message)
//     }
//   }
  
//   module.exports = CustomAPIError