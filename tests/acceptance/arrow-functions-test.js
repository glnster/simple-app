import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | arrow functions', (hooks) => {
  // test arrow function, context
  setupApplicationTest(hooks);

  hooks.beforeEach(() => {
    //noop
  });

  test('when arrow functions are passed into module or beforeEach, the context passed into getTestMetadata is correct', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
