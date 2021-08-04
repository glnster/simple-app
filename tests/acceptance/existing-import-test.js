import { QUnit, module, test } from 'qunit';
import { visit, currentURL, getTestMetadata } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | existing import', (hooks) => {
  // test arrow function, context
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    let testMetadata = getTestMetadata(QUnit.config.current.testEnvironment);
    testMetadata.gggOpt = 'gggOpt';
  });

  hooks.beforeEach(() => {
    //noop
  });

  test('when there is an existing import of getTestMetadata, we still insert our beforeEach, and report has filePath', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
  });
});
