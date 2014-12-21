
var base = require('../../base');

module.name = 'home';
module.deps = [];

module.exports = base
  .createModule(module.name, module.deps)
  .config(require('./config.js'))
  .controller(require('./controllers.js'));
