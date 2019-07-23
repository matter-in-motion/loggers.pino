'use strict';
const pino = require('pino');

class Pino {
  constructor() {
    this.initRequired = true;
  }

  init({ settings }) {
    const s = settings.pino || {};
    this.instance = pino(s.options, s.destination);
  }
}

module.exports = Pino;
