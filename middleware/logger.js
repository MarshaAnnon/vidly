const { createLogger, transports } = require('winston');

module.exports = createLogger({
  transports: new transports.File({
    filename: 'logfile.log',
  }),
});
