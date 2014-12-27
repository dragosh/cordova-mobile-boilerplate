/*----------------------------------------------------------------*/
/* Device
/*----------------------------------------------------------------*/

var base = require('../../base');
module.name = 'ngCordova.plugins.dialogs';
// @ngInject
function $cordovaDialogs($window) {

  var exports = {};

  exports.alert = function(message) {
    $window.alert(message);
  };
  exports.confirm = function() {

  };
  exports.prompt = function() {

  };
  exports.beep = function() {

  };
  return exports;
}

module.exports = base.createModule(module.name, [])
  .factory('$cordovaDialogs', $cordovaDialogs );
