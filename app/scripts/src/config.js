// @ngInject
module.exports = function config ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/',
      abstract: true,
      controller: 'MainCtrl as mainCtrl'
    });
  $urlRouterProvider.otherwise('/');
};
