import { QUnit, module, test } from 'qunit';
import { visit, currentURL, getTestMetadata } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super-blog', (hooks) => {
  // test arrow function, context
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    let testMetadata = getTestMetadata(QUnit.config.current.testEnvironment);
    testMetadata.gggOpt = 'gggOpt';
  });

  hooks.beforeEach(() => {
    //noop
  });

  test('engine filePath', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
