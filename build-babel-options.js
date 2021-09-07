/* eslint-env node */
'use strict';

module.exports = function buildBabelOptions(projectPathInfo) {
  return {
    plugins: [
      [
        require.resolve('babel-plugin-ember-test-metadata'),
        {
          enabled: !!process.env.BABEL_TEST_METADATA,
          projectPathInfo,
        },
      ],
    ],
  };
};
