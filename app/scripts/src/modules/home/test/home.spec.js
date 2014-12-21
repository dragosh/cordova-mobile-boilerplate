'use strict';

var home = require('../index');

beforeEach(window.angular.mock.module('ionic'));

beforeEach(window.angular.mock.module(home.name, function($provide) {
    // $provide.value('someService', {} );
}));


describe('Controllers', function() {
    var createController;
    beforeEach(inject(function($controller, $rootScope) {
        createController = function(ctrlName) {
            return $controller(ctrlName, {
                'scope': $rootScope.$new()
            });
        };
    }));

    it('should create ctrl.greeting when calling sayHello', function() {
        var ctrl = createController('HomeCtrl');
        expect(ctrl.greeting).toBeUndefined();
        ctrl.sayHello();
        expect(ctrl.greeting).toEqual('Hello World');
    });
});
