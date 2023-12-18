/**
 * @fileoverview CustomEvent class
 * @module components/custom-event
 * @requires module:constants
 * @requires module:filter
 * @requires module:newrelic
 */

const constants = require("../../constants");
const { eventTypeFormat} = require("../../filter");
const newrelic = require("../../services/newrelic");

/**
 * CustomEvent class
 * @class CustomEvent
 */
class CustomEvent {
    /**
     * Add a new custom event
     * @param {string} name - The event name
     * @param {object} attributes - The event attributes
     * @returns {void}
     */
    static add = (name, attributes = {}) => {
        const event = {
            eventType: eventTypeFormat(name),
            service: constants.SERVICE_NAME,
            hostname: constants.HOST_NAME,
            ...attributes,
        };

        newrelic.send_custom_event(event);
    }
}

/**
 * @typedef {Object} CustomEvent
 * @property {function} add - Add a new custom event
 */
module.exports = CustomEvent;