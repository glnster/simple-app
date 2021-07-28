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

  test('visiting /index', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});

module('Unit | foo', function () {
  test('foo', async function (assert) {
    assert.equal('bar', 'bar');
  });
});

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(beforeEachSetup);

  test('visiting /index', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
