// @ngInject
exports.HomeCtrl = function HomeCtrl () {
    var ctrl = this;
    ctrl.name = 'World';

    ctrl.sayHello = function() {
         ctrl.greeting = 'Hello ' + ctrl.name;
    };
};
