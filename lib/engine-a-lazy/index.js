/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'engine-a-lazy',

  lazyLoading: {
    enabled: true
  },

  isDevelopingAddon() {
    return true;
  },

  included(app, ...args) {
    this._super(app, ...args);

    this.import('node_modules/moment/moment.js', {
      using: [
        { transformation: 'amd', as: 'moment' }
      ]
    });
  },
});
