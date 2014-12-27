/*----------------------------------------------------------------*/
/* Mock ngCordova
/*----------------------------------------------------------------*/
var base = require('../base');

module.exports = base.createModule('ngCordova', [
  require('./plugins/device.mock').name,
  require('./plugins/dialogs.mock').name
]);
