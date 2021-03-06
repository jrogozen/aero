app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('chat', {
      url: '/',
      abstract: true,
      templateUrl: 'js/chat/chat.html',
      controller: 'chatCtrl'
    })
    .state('chat.add', {
      url: '',
      templateUrl: 'js/chat/chat.add.html',
    })
    .state('chat.edit', {
      url: ':id/edit',
      templateUrl: 'js/chat/chat.edit.html',
      controller: 'chatCtrl'
    })
    ;

}]);