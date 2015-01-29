app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('chat', {
      url: '/:id',
      abstract: true,
      templateUrl: 'js/chat/chat.html',
      controller: 'chatCtrl'
    })
    .state('chat.add', {
      url: '',
      templateUrl: 'js/chat/chat.add.html',
    })
    .state('chat.edit', {
      url: '/edit',
      templateUrl: 'js/chat/chat.edit.html'
    })
    ;

}]);