'use strict';
const pino = require('pino');

class Pino {
  constructor() {
    this.initRequired = true;
  }

  init({ settings }) {
    const s = settings.pino || {};
    this.pino = pino(s.options, s.destination);
  }

  get(unit) {
    return this.pino.child({ unit });
  }
}

module.exports = Pino;
