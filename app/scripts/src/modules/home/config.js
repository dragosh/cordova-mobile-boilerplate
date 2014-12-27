// @ngInject
module.exports = function config ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/scripts/src/modules/home/templates/index.ng.html',
      controller: 'HomeCtrl as home'
    });
};
