var facebook = require('./plugins/facebookConnect'); // use this until we create a mock service


window.ngCordovaMocks = angular.module('ngCordova', [ facebook.name ]);

require('./mocks/device');
require('./mocks/network');
require('./mocks/statusbar');
require('./mocks/vibration');
require('./mocks/dialogs');
require('./mocks/camera');



module.exports = window.ngCordovaMocks;
