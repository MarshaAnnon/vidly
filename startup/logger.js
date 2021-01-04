const { createLogger, transports } = require('winston');
require('winston-mongodb');

module.exports = createLogger({
  transports: [
    new transports.File({
      filename: 'logfile.log',
    }),
    new transports.Console({ colorize: true, prettyPink: true }),
    new transports.MongoDB({
      level: 'error',
      //mongo database connection link
      db: 'mongodb://localhost/vidly',
      options: {
        useUnifiedTopology: true,
      },
      // A collection to save json formatted logs
      collection: 'server_logs',
    }),
  ],
});
