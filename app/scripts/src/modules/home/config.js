// @ngInject
module.exports = function config ($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/scripts/src/modules/home/templates/index.ng.html',
      controller: 'HomeCtrl as homeCtrl'
    });
};
