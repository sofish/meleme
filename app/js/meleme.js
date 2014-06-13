'use strict';

angular.module('meleme', [
  'ngRoute',
  'ngTouch',
  'meleme.filters',
  'meleme.services',
  'meleme.directives',
  'meleme.controllers'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //$locationProvider.html5Mode(true);

  $routeProvider.when('/dropdown', {templateUrl: 'partials/dropdown.html', controller: 'DropdownCtrl'});
  $routeProvider.when('/tab', {templateUrl: 'partials/tab.html', controller: 'TabCtrl'});
  $routeProvider.when('/accordion', {templateUrl: 'partials/accordion.html', controller: 'AccordionCtrl'});
  $routeProvider.otherwise({redirectTo: '/dropdown'});
}]);
