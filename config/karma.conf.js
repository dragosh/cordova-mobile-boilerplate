'use strict';

module.exports = function(karma) {
  karma.set({
    basePath: '../app/',
    frameworks: ['jasmine', 'browserify'],
    files: [
      'lib/ionic/js/ionic.bundle.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'scripts/src/**/*.spec.js'
    ],
    exclude: [
      'scripts/src/**/*.step.js',
      'scripts/src/**/*.html'
    ],
    preprocessors: {
      'scripts/src/**/*.spec.js': [ 'browserify' ],
    },
    browsers: ['PhantomJS'],

    //logLevel: 'LOG_DEBUG',
    // browserify configuration
    browserify: {
        debug: false,
        //transform: [ ['reactify', { 'es6': true }], 'coffeeify', 'brfs']
        transform: ['brfs', 'browserify-shim']
    },
    osxReporter: {
      activate: function(results, browser) {
        return results.failed > 0 ? 'com.apple.Terminal' : 'com.apple.Safari';
      }
    }
  });
};
