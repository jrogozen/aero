var app = angular.module('chat', [
  'ui.router',
  'ngSanitize'
]);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider
    .otherwise('/');
}]);