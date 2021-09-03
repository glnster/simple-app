/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
const buildBabelOptions = require('../../build-babel-options');

module.exports = EngineAddon.extend({
  name: 'super-blog',

  lazyLoading: Object.freeze({
    enabled: false,
  }),

  isDevelopingAddon() {
    return true;
  },

  babel: buildBabelOptions(),
});
