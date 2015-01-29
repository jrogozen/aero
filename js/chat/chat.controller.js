app.controller('chatCtrl', ['$scope', '$stateParams', 'Message', function($scope, $stateParams, Message) {
  $scope.messages = [];

  function getMessages() {
    return Message.getMessages()
      .then(function(data) {
        $scope.messages = Message.models.messages;
      });
  }

  function saveMessage(message) {
    return Message.saveMessage(message)
      .then(function(data) {
        $scope.message = {};
      });
  }

  $scope.saveMessage = function(message) {
    saveMessage(message);
  };

  getMessages();
}]);