import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    //noop
  });

  module('Some nested module', function (hooks) {
    hooks.beforeEach(async function () {
      //noop
    });

    test('visiting /index', async function (assert) {
      await visit('/');

      assert.equal(currentURL(), '/');
    });
  });
});
