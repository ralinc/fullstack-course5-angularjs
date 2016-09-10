(function() {
  'use strict';

  angular.
    module('myFirstApp', []).
    controller('MyFirstController', function($scope) {
      $scope.name = "Ralin";
      $scope.sayHello = function() {
        return "Hello ";
      };
    });
})();
