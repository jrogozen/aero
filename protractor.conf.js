'use strict';

exports.config = {
  allScriptsTimeout: 110000,

  baseUrl: 'http://localhost:8080',

  chromeOnly: true,

  chromeDriver: './node_modules/protractor/selenium/chromedriver',

  specs: [
    'test/e2e/**/*.spec.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};