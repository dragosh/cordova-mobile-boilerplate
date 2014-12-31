var base = require('../../base');
var utils = base.utils;

// @ngInject
function busProvider() {

  var EventEmitter = require('events').EventEmitter;
  var ee = new EventEmitter();

  var io = require('socket.io-client');
  var socket = io.connect('http://localhost:3333');

  var defaults = {

  };

  this.config = function(options) {
    this.options = utils.extend( defaults , options);
  };

  this.setMaxListeners = function(num) {
    ee.setMaxListeners(num);
  };

  this.setChannel = function(channel) {

  };
  // @ngInject
  this.$get = function() {

    exports.emit = function() {
      ee.emit.apply(ee, arguments);
      return this;
    };

    exports.on = function() {
      var args = Array.prototype.slice.call(arguments);
      ee.on.apply(ee, args);
      socket.on.apply(socket, args);
      return this;
    };
    exports.once = function() {
      ee.once.apply(ee, arguments);
      return this;
    };

    exports.off = function() {
      ee.removeListener.apply(ee, arguments);
      return this;
    };

    exports.offAll = function() {
      ee.removeAllListeners.apply(ee, arguments);
      return this;
    };

    return exports;
  };
}

module.exports = base.createModule('core.bus', [])
  .provider('bus', busProvider);
