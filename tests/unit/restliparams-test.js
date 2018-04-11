import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { toRestli, fromRestli, toParams } from 'restliparams';

module('Unit | restliparams', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it is being exported', function(assert) {
    assert.equal(typeof toRestli, 'function');
    assert.equal(typeof fromRestli, 'function');
    assert.equal(typeof toParams, 'function');
  });
});
