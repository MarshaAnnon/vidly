require('express-async-errors');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
const express = require('express');
const winston = require('winston');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  winston.info(`Listening on port ${port}`);
});
