/*----------------------------------------------------------------*/
/* ngCordova
/*----------------------------------------------------------------*/

var base = require('../base');

module.exports = base.createModule('ngCordova', [
  require('./plugins/device').name,
  require('./plugins/dialogs').name
]);
