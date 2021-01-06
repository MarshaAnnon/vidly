const express = require('express');
const app = express();
const logger = require('./middleware/logging');

require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/logger')();
require('./startup/validation')();

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  logger.info(`Listening on port ${port}`);
});

module.exports = server;
