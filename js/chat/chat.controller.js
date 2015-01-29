app.controller('chatCtrl', ['$scope', '$stateParams', 'Message', function($scope, $stateParams, Message) {
  $scope.messages = [];

  function getMessages() {
    if(Message.models.messages.length < 1) {
     return Message.getMessages()
      .then(function(data) {
        $scope.messages = Message.models.messages;
      }); 
    }
    $scope.messages = Message.models.messages;
  }

  function saveMessage(message) {
    return Message.saveMessage(message)
      .then(function(data) {
        $scope.message = {};
      });
  }

  function editMessage(newMessage) {
    newMessage.id = parseInt($stateParams.id);
    Message.editMessage(newMessage);
  }

  $scope.saveMessage = function(message) {
    saveMessage(message);
  };

  $scope.editMessage = function(newMessage) {
    editMessage(newMessage);
  }

  getMessages();
}]);