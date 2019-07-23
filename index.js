'use strict';
const Pino = require('./pino');

module.exports = () => ({
  loggers: { pino: new Pino() }
})
