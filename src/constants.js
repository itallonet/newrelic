const constants = {
    LOG_ENDPOINT: 'https://log-api.newrelic.com/log/v1',
    LICENSE_KEY: process.env.LICENSE_KEY || 'default-license-key',
    SERVICE_NAME: process.env.SERVICE_NAME || 'default-service',
    HOST_NAME: process.env.HOST_NAME || 'localhost',
}

module.exports = constants;