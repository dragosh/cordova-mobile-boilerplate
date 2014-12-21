var base = require('../../base');
module.name = 'core';
module.deps = [];

module.exports = base
  .createModule(module.name, module.deps)
  .constant('utils', base.utils)
  .controller(require('./mainCtrl'));
