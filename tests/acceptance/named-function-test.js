import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

function beforeEachSetup() {
  //mock
}

module('Acceptance | named function', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(beforeEachSetup);

  test('when a named function is passed into an existing beforeEach, insert our beforeEach above theirs', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
