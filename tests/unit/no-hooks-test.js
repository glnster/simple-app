import { module, test } from 'qunit';

module('Unit | no hooks', function () {
  test('when no hooks are passed in, bpetm should add hooks and call its new beforeEach from it', function (assert) {
    assert.equal('bar', 'bar');
  });
});
