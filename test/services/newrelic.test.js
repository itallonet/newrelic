// FILEPATH: /C:/Labs/Station/products/newrelic/test/newrelic.test.js

const nock = require('nock');
const NewRelicService = require('../../src/services/newrelic');
const constants = require('../../src/constants');

describe('NewRelicService', () => {
  describe('request', () => {
    test('should throw a CustomError if the request fails', async () => {
      const endpoint = 'https://test-endpoint.com';
      const data = { message: 'Test data' };

      // Mock the HTTP request to return an error
      nock(endpoint)
        .post('/', data)
        .replyWithError('Request failed');

      await expect(NewRelicService.request(endpoint, data)).rejects.toThrow('Error API New Relic.');
    });
  });
});