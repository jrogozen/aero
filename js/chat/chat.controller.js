app.controller('chatCtrl', ['$scope', 'Message', function($scope, Message) {
  $scope.messages = [];

  function getMessages() {
    return Message.getMessages()
      .then(function(data) {
        $scope.messages = data;
        return $scope.messages;
      });
  }

  function addMessage(message) {
    // set timestamp to current time
    message.timestamp = new Date();

    return Message.addMessage(message)
      .then(function(data) {
        /* this way is waiting to push the new message into DOM until it has been saved to DB.
        alternative would be to add to $scope.messages immediately */
        $scope.messages.push(data);

        // reset form
        $scope.message = {};
        return $scope.messages;
      });
  }

  $scope.addMessage = function(message) {
    addMessage(message);
  };

  getMessages();
}]);