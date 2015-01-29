app.controller('chatCtrl', ['$scope', '$stateParams', 'Message', function($scope, $stateParams, Message) {
  $scope.messages = [];

  if($stateParams.id) {
    Message.findMessage($stateParams.id, $scope.messages);
  }

  function getMessages() {
    return Message.getMessages()
      .then(function(data) {
        $scope.messages = data;
        return $scope.messages;
      });
  }

  function saveMessage(message) {
    // set timestamp to current time && id to latest id. would probably move this to backend once implemented
    message.timestamp = new Date();
    message.id = $scope.messages.length+1;

    return Message.saveMessage(message)
      .then(function(data) {
        /* this way is waiting to push the new message into DOM until it has been saved to DB.
        alternative would be to add to $scope.messages immediately */
        data.editable = true;
        $scope.messages.push(data);

        // reset form
        $scope.message = {};
        return $scope.messages;
      });
  }

  $scope.saveMessage = function(message) {
    saveMessage(message);
  };

  getMessages();
}]);