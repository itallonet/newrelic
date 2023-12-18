const CustomEvent = require('../../../src/components/custom-event');
const constants = require('../../../src/constants');
const { eventTypeFormat } = require('../../../src/filter');
const newrelic = require('../../../src/services/newrelic');

jest.mock('../../../src/constants');
jest.mock('../../../src/filter');
jest.mock('../../../src/services/newrelic');

describe('CustomEvent.add', () => {
  it('should call eventTypeFormat with the correct parameters', () => {
    const name = 'Test event';
    const attributes = { key: 'value' };

    CustomEvent.add(name, attributes);

    expect(eventTypeFormat).toHaveBeenCalledWith(name);
  });

  it('should call send_custom_event with the correct parameters', () => {
    const name = 'Test event';
    const attributes = { key: 'value' };
    const processedName = 'IRNRTest event';

    eventTypeFormat.mockReturnValue(processedName);

    CustomEvent.add(name, attributes);

    expect(newrelic.send_custom_event).toHaveBeenCalledWith({
      eventType: processedName,
      service: constants.SERVICE_NAME,
      hostname: constants.HOST_NAME,
      ...attributes,
    });
  });

  it('should use an empty object as default attributes', () => {
    const name = 'Test event';
    const processedName = 'IRNRTest event';

    eventTypeFormat.mockReturnValue(processedName);

    CustomEvent.add(name);

    expect(newrelic.send_custom_event).toHaveBeenCalledWith({
      eventType: processedName,
      service: constants.SERVICE_NAME,
      hostname: constants.HOST_NAME,
    });
  });
});