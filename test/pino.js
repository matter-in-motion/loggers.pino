'use strict';
const test = require('ava');
const App = require('@matter-in-motion/app');
const extension = require('../index');

test('loads and inits extension from object', async t => {
  const app = new App({
    extensions: [ extension ]
  });
  await app.start();

  const pino = app.require('loggers.pino');
  t.truthy(pino);
  t.is(typeof pino.info, 'function');
});
