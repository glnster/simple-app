import Application from 'simple-app/app';
import config from 'simple-app/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import {
  setupGlobalA11yHooks,
  setupMiddlewareReporter,
} from 'ember-a11y-testing/test-support';

import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));
setupGlobalA11yHooks(() => true);
setupMiddlewareReporter();
setup(QUnit.assert);

start();
