/*----------------------------------------------------------------*/
/* Base File
/*----------------------------------------------------------------*/

var angular = window.angular;
var lodash = require('lodash').noConflict();
var NS = 'app';

exports.createModule = function createModule (name, deps) {
  name = name !== NS ? [NS, name].join('.') : NS;
  return angular.module(name, deps);
};

exports.bootstrap = function bootstrap (name) {
  return angular.bootstrap(document, [name]);
};

exports.utils = lodash;
