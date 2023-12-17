/**
 * Log component
 * @module components/log
 */

const constants = require("../../constants");
const LogLevel = require("./level");
const { processMessage } = require("../../filter");
const newrelic = require("../../services/newrelic");

/**
 * Log class
 * @class Log
 */
class Log {
  /**
   * Add a new log
   * @param {string} message - The log message
   * @param {string} level - The log level
   * @returns {void}
   */
  static add = (message, level = LogLevel.DEBUG) => {
    const log = {
      timestamp: new Date().getTime(),
      message: processMessage(message),
      level,
      service: constants.SERVICE_NAME,
      hostname: constants.HOST_NAME,
    };

    newrelic.send_log(log);
  };
}

/**
 * @typedef {Object} Log
 * @property {function} add - Add a new log
 */
module.exports = Log;