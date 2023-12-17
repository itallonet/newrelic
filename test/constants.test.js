const constants = require("../src/constants");

describe("Constants Configuration", () => {
  test("should have a log endpoint", () => {
    expect(constants.LOG_ENDPOINT).toBe("https://log-api.newrelic.com/log/v1");
  });

  test("should have a license key", () => {
    expect(constants.LICENSE_KEY).toBeDefined();
  });

  test("should have a service name", () => {
    expect(constants.SERVICE_NAME).toBeDefined();
  });

  test("should have a host name", () => {
    expect(constants.HOST_NAME).toBeDefined();
  });
});
