const { createLogger, format, transports } = require('winston');
// require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
  createLogger({
    transports: [
      new transports.File({
        filename: 'logfile.log',
        handleExceptions: true,
      }),
      new transports.Console({
        level: 'info',
      }),
      //   new transports.MongoDB({
      //     level: 'info',
      //     //mongo database connection link
      //     db: 'mongodb://localhost/vidly',
      //     options: {
      //       useUnifiedTopology: true,
      //     },
      //     // A collection to save json formatted logs
      //     collection: 'server_logs',
      //   }),
    ],
    format: format.combine(format.colorize(), format.json()),
    exceptionHandlers: [new transports.File({ filename: 'exceptions.log' })],
  });
};
