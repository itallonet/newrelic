const Log = require('../../../src/components/log');
const constants = require('../../../src/constants');
const { processMessage } = require('../../../src/filter');
const newrelic = require('../../../src/services/newrelic');
const LogLevel = require('../../../src/components/log/level');

jest.mock('../../../src/filter');
jest.mock('../../../src/services/newrelic');

describe('Log', () => {
  describe('add', () => {
    test('should process the message and add a new log with the correct level and service name', () => {
      const message = 'Test message';
      const level = LogLevel.INFO;
      const processedMessage = 'Processed message';
      processMessage.mockReturnValue(processedMessage);

      Log.add(message, level);

      expect(processMessage).toHaveBeenCalledWith(message);
      expect(newrelic.send_log).toHaveBeenCalledWith({
        timestamp: expect.any(Number),
        message: processedMessage,
        level,
        service: constants.SERVICE_NAME,
        hostname: constants.HOST_NAME,
      });
    });

    test('should use DEBUG level by default', () => {
      const message = 'Test message';
      const processedMessage = 'Processed message';
      processMessage.mockReturnValue(processedMessage);

      Log.add(message);

      expect(processMessage).toHaveBeenCalledWith(message);
      expect(newrelic.send_log).toHaveBeenCalledWith({
        timestamp: expect.any(Number),
        message: processedMessage,
        level: LogLevel.DEBUG,
        service: constants.SERVICE_NAME,
        hostname: constants.HOST_NAME,
      });
    });
  });
});