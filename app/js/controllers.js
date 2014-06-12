'use strict';

/* Controllers */

angular.module('meleme.controllers', [])

  .controller('MelemeCtrl', ['$scope', function($scope) {
    $scope.drawer = null;
    $scope.c = function() {
      alert(1);
    }
  }])

  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
