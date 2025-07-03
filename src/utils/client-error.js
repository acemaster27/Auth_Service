const AppError = require('./error-handler');
const { StatusCodes } = require('http-status-codes');

class ClientError extends AppError {
    constructor(name, message, statusCode) {
        super(
            name,
            message,
            explanation,
            statusCode
        );
    }
}

module.exports = ClientError;