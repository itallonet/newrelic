const Log = require("./src/components/log/index.js");
const LogLevel = require("./src/components/log/level.js");

const CustomEvent = require("./src/components/custom-event/index.js");

module.exports = { Log: Log.add, LogLevel, CustomEvent: CustomEvent.add };
