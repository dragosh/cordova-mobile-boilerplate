/*----------------------------------------------------------------*/
/* Device
/*----------------------------------------------------------------*/
var base = require('../../base');
module.name = 'ngCordova.plugins.device';
// @ngInject
function $cordovaDevice ($q) {

  var exports = {};

  exports.getDevice = function() {

  };
  exports.getCordova = function() {

  };
  exports.getModel = function() {

  };
  exports.getDevice = function() {

  };
  exports.getPlatform = function() {

  };
  exports.getVersion = function() {

  };
  return exports;
}

module.exports = base.createModule(module.name, [])
  .factory('$cordovaDevice', $cordovaDevice);
