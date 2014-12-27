/*
|--------------------------------------------------------------------------
| Main App
|--------------------------------------------------------------------------
*/

var base = require('./base');

module.name = 'app';
// Cordova modules
var ngCordova = window.isDevice ? require('./ng-cordova/index') : require('./ng-cordova/mocks');

module.dependencies = [
  'ionic',
  'app.templates',
  require('./modules/core/index').name,
  require('./modules/home/index').name,
  ngCordova.name
];
// Main App
base.createModule(module.name, module.dependencies)
  .config(require('./config'))
  .run(require('./run'));


window.ionic.Platform.ready(function() {
  base.bootstrap(module.name);
});
