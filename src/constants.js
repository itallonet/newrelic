/**
 * Constants used by the New Relic Lambda Layers
 */
const constants = {
  LOG_ENDPOINT: "https://log-api.newrelic.com/log/v1",
  CUSTOM_EVENT_ENDPOINT: `https://insights-collector.newrelic.com/v1/accounts/${process.env.IRNR_ACCOUNT_ID}/events`,
  ACCOUNT_ID: process.env.IRNR_ACCOUNT_ID || "default-account-id",
  USER_KEY: process.env.IRNR_USER_KEY || "default-user-key",
  LICENSE_KEY: process.env.IRNR_INGESTION_KEY || "default-license-key",
  SERVICE_NAME: process.env.IRNR_SERVICE_NAME || "default-service",
  HOST_NAME: process.env.IRNR_HOST_NAME || "localhost",
};

/**
 * @typedef {Object} Constants
 */
module.exports = constants;
