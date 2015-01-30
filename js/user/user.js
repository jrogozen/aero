app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'js/user/user.html',
      controller: 'userCtrl'
      })
    .state('users.messages', {
      url: '/:id/messages',
      templateUrl: 'js/user/user.messages.html',
      controller: 'userCtrl'
    })
    ;
}]);