import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', (hooks) => {
  // test arrow function, context
  setupApplicationTest(hooks);

  hooks.beforeEach(() => {
    //noop
  });

  test('visiting /index', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
