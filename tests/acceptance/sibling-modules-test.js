import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(async function () {
    //noop
  });

  test('bpetm should insert test metadata statements to existing beforeEach', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});

module('Acceptance | search', function (hooks) {
  setupApplicationTest(hooks);

  test('bpetm should create and insert a new beforeEach after any setup(hooks) calls', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});

module('Acceptance | about', function (hooks) {
  setupApplicationTest(hooks);

  test('bpetm should correctly transpile each of these sibling modules', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
