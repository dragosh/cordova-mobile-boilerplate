/*
|--------------------------------------------------------------------------
| Main App
|--------------------------------------------------------------------------
*/

var base = require('./base');

module.name = 'app';
// Cordova modules
var ngCordova = window.App.isDevice
        ? require('../ng-cordova/module')
        : require('../ng-cordova/module-mocks');

module.dependencies = [
  'ionic',
  'app.templates',
  require('./modules/core/index').name,
  require('./modules/home/index').name
  // ngCordova.name
];


// Main App
base.createModule(module.name, module.dependencies)
  .config(require('./config'))
  .run(require('./run'));

// Attach to Document
base.bootstrap(module.name);
