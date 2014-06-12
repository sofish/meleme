'use strict';

angular.module('meleme', [
  'ngRoute',
  'ngTouch',
  'meleme.filters',
  'meleme.services',
  'meleme.directives',
  'meleme.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
