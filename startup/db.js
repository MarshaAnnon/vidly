const mongoose = require('mongoose');
const config = require('config');
const logger = require('../middleware/logging');

module.exports = function () {
  const db = config.get('db');
  mongoose
    .connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => logger.info(`Connected to ${db}`));
};
