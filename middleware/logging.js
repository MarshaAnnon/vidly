const { createLogger, transports, format } = require('winston');
const { combine, timestamp, label, simple } = format;

const logger = createLogger({
  format: combine(
    label({ label: 'CUSTOM', message: true }),
    timestamp(),
    simple()
  ),
  transports: [new transports.Console()],
});

module.exports = logger;
