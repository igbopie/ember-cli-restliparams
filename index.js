'use strict';

module.exports = {
  name: 'ember-cli-restliparams',
  included (app) {
    this._super.included.apply(this, arguments)

    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    app.import('node_modules/restliparams/lib/index.js', {
      using: [
        { transformation: 'cjs', as: 'restliparams'}
      ]
    });
  },
};
