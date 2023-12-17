/**
 * Custom error class
 * @class CustomError
 * @extends {Error}
 * @param {string} message - Error message.
 * @returns {string} - Returns the error message.
 * @example
 * throw new CustomError("Error API New Relic.", error);
 */
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}


module.exports = CustomError;