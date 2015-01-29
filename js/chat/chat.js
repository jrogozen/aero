app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('chat', {
      url: '/',
      templateUrl: 'js/chat/chat.html',
      controller: 'chatCtrl'
    });
}]);