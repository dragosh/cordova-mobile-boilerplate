/*----------------------------------------------------------------*/
/* Device
/*----------------------------------------------------------------*/
var base = require('../../base');
module.name = 'ngCordova.plugins.dialogs';
// @ngInject
function $cordovaDialogs($q) {

  var exports = {};
  var dialog = navigator.notification;

  /**
   * Alert
   * @message  {string}
   * @title  {string}
   * @buttonName  {string}
   * @return {object}
   */
  exports.alert = function(message, title, buttonName) {
    var d = $q.defer();
    dialog.alert(message, function () {
      d.resolve();
    }, title, buttonName);
    return d.promise;
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
