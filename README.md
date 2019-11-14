# Matter In Motion

[![NPM Version](https://img.shields.io/npm/v/@matter-in-motion/loggers.pino.svg?style=flat-square)](https://www.npmjs.com/package/@matter-in-motion/loggers.pino)
[![NPM Downloads](https://img.shields.io/npm/dt/@matter-in-motion/loggers.pino.svg?style=flat-square)](https://www.npmjs.com/package/@matter-in-motion/loggers.pino)

**Node.js framework for building applications (cli, server, etc...).**

## Pino

Matter In Motion extension for [pino](https://github.com/pinojs/pino) logger

### Installation

`npm i @matter-in-motion/loggers.pino`

### Settings

- pino
  - options
  - destination

Both settings are described [here](https://github.com/pinojs/pino/blob/master/docs/api.md)

### Usage

```js
const logger = app.require('loggers.pino').get('app');
```

#### get(unitName)

Return a child logger with added unit information

_All loggers units are required to have one method `get(unitName)` that returns an actual logger instance with `{ unit: unitName }` added to every message._

License: MIT.
