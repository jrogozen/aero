app.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('chat', {
      url: '/',
      abstract: true,
      templateUrl: 'js/chat/chat.html',
      controller: 'chatCtrl'
    })
    .state('chat.list', {
      url: '',
      templateUrl: 'js/chat/chat.list.html',
    })
    .state('edit', {
      url: '/:id/edit',
      controller: 'chatCtrl',
      templateUrl: 'js/chat/chat.edit.html'
    })
    ;

}]);