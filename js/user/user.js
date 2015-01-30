app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('users', {
      url: '/users/:id',
      templateUrl: 'js/user/user.html',
      controller: 'userCtrl'
      })
    .state('users.messages', {
      url: '/messages',
      templateUrl: 'js/user/user.messages.html'
    })
    ;
}]);