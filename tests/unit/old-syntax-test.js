import { module, test } from 'qunit';

module('Unit | Utils | using old QUnit syntax');

test('when no function is passed as 2nd arg to module, bpetm should skip transpilation of this file', function testGetDots(assert) {
  assert.expect(1);

  assert.equal('true', 'true', 'pass');
});
