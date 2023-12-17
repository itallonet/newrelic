const constants = require("../constants");
const CustomError = require("../error");

/**
 * @class NewRelic
 * @description Class responsible for making requests to the New Relic API.
 */
class NewRelic {
  /**
   * @method request
   * @description Method responsible for making requests to the New Relic API.
   * @param {string} endpoint - Endpoint to be requested.
   * @param {object} data - Data to be sent to the endpoint.
   * @returns {object} - Returns the response of the request.
   */
  static request = async (endpoint, data) => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Api-Key": constants.LICENSE_KEY,
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (error) {
      throw new CustomError("Error API New Relic.", error);
    }
  };

  /**
   * @method send_log
   * @description Method responsible for sending logs to the New Relic API.
   * @param {object} log - Log to be sent to the New Relic API.
   * @returns {Promise<object>} - Returns the response of the request.
   */
  static send_log = async (log) => {
    try {
      const response = await this.request(constants.LOG_ENDPOINT, log);
      return response;
    } catch (error) {
      throw new CustomError("Error sending log to New Relic", error);
    }
  };
}

module.exports = NewRelic;
