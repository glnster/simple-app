import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

function beforeEachSetup() {
  //mock
}

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    //noop
  });

  test('visiting /index', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});

module('Acceptance | search', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /search', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});

module('Acceptance | about', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(beforeEachSetup);

  test('visiting /about', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
