/**
 * @param {string | object} message
 * @returns {string}
 * @description Process the message to be sent to New Relic
 * @example const message = processMessage('Hello World');
 * console.log(message); // Hello World
 * @example const message = processMessage({ message: 'Hello World' });
 * console.log(message); // {"message":"Hello World"}
 * @example const message = processMessage(123);
 * console.log(message); // 123
 * @example const message = processMessage({ message: 123 });
 * console.log(message); // {"message":123}
 */
function processMessage(message) {
  if (typeof message === "object") message = JSON.stringify(message);
  if (typeof message !== "string") message = String(message);

  const messageBuffer = Buffer.from(message, "utf-8");
  const maxSize = 0.5 * 1024 * 1024;

  if (messageBuffer.length > maxSize)
    message = messageBuffer.slice(0, maxSize).toString("utf-8");

  return message;
}

/**
 * @param {string} str
 * @returns {string}
 * @description capitalize the first letter of each word
 * @example const message = capitalizeWords('hello world');
 * console.log(message); // Hello World
 */
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * @param {string} name
 * @returns {string}
 * @description Format the event type name
 * @example const eventType = eventTypeFormat('hello world');
 * console.log(eventType); // IRNRHelloWorld
 */

function eventTypeFormat(name) {
  if (typeof name !== "string") name = "Default";
  name = capitalizeWords(name);
  name = name.replace(/\s+/g, "");
  return "IRNR" + name;
}

/**
 * @typedef {Object} Filter
 * @property {function} processMessage - Process the message to be sent to New Relic
 * @property {function} eventTypeFormat - Format the event type name
 */
module.exports = { processMessage, eventTypeFormat };
