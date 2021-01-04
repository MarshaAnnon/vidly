const logger = require('../startup/logger');

module.exports = function (err, req, res, next) {
  logger.error(err.message, err);
  res.status(500).send('Uh-oh, something went wrong');
};
