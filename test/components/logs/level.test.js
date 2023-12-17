const LogLevel = require('../../../src/components/log/level');

describe('LogLevel', () => {
  test('should have DEBUG property', () => {
    expect(LogLevel).toHaveProperty('DEBUG', 'DEBUG');
  });

  test('should have INFO property', () => {
    expect(LogLevel).toHaveProperty('INFO', 'INFO');
  });

  test('should have WARN property', () => {
    expect(LogLevel).toHaveProperty('WARN', 'WARN');
  });

  test('should have ERROR property', () => {
    expect(LogLevel).toHaveProperty('ERROR', 'ERROR');
  });
});