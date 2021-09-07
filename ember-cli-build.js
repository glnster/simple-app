'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const buildBabelOptions = require('./build-babel-options');
// const { getProjectPathInfo } = require('babel-plugin-ember-test-metadata');

function getProjectPathInfo(project) {
  const parsedProjectInfo = {};

  if (project) {
    parsedProjectInfo.pkg = {
      name: project.pkg.name,
      'ember-addon': {
        paths: project.pkg['ember-addon'].paths,
      },
      // more props that might be needed in correcting the file path
    };
  }

  return parsedProjectInfo;
}

module.exports = function (defaults) {
  // console.log('defaults: ', defaults);

  // A util in BPETM that returns select project info, project name,
  // engine/addon info, paths
  const projectPathInfo = getProjectPathInfo(defaults.project);

  let app = new EmberApp(defaults, {
    babel: buildBabelOptions(projectPathInfo),
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
