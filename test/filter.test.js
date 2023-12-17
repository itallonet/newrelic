const { processMessage } = require('../src/filter');

describe('processMessage', () => {
  test('should stringify objects', () => {
    const message = { message: 'Hello World' };
    const result = processMessage(message);
    expect(result).toBe(JSON.stringify(message));
  });

  test('should convert non-string types to string', () => {
    const message = 123;
    const result = processMessage(message);
    expect(result).toBe(String(message));
  });

  test('should not exceed half a megabyte', () => {
    const message = 'a'.repeat(0.6 * 1024 * 1024); // More than half a megabyte
    const result = processMessage(message);
    expect(Buffer.from(result, 'utf-8').length).toBeLessThanOrEqual(0.5 * 1024 * 1024);
  });

  test('should truncate message if it exceeds half a megabyte', () => {
    const message = 'a'.repeat(0.6 * 1024 * 1024); // More than half a megabyte
    const result = processMessage(message);
    const expected = 'a'.repeat(0.5 * 1024 * 1024); // Exactly half a megabyte
    expect(result).toBe(expected);
  });
});