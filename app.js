(function() {
  'use strict';

  angular.
    module('NameCalculator', []).
    controller('NameCalculatorController', function($scope) {
      $scope.name = "";
      $scope.totalValue = 0;

      $scope.displayNumeric = function() {
        $scope.totalValue = calculateNumericForString($scope.name);
      };

      function calculateNumericForString(string) {
        return string.
          split('').
          map(function (char) { return char.charCodeAt(0); }).
          reduce(function (total, current) { return total + current; }, 0);
      }
    });
})();
