var device = require('./plugins/device');
var network = require('./plugins/network');
var dialogs = require('./plugins/dialogs');
var camera = require('./plugins/camera');
var facebook = require('./plugins/facebookConnect');

module.exports = angular.module('ngCordova', [
  device.name,
  dialogs.name,
  network.name,
  facebook.name,
  camera.name
]);
