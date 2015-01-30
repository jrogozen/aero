app.factory('Message', ['$http', '$timeout', '$state', function($http, $timeout, $state) {
  var models = {
    messages: []
  };

  return {
    models: models,
    getMessages: getMessages,
    editMessage: editMessage,
    saveMessage: saveMessage,
    getUserMessages: getUserMessages
  };

  function getMessages() {
    if(models.messages.length > 0) {
      return models.messages;
    }

    return $http.get('fixtures/messages.json')
      .then(getMessagesComplete)
      .catch(getMessagesFailed);

    function getMessagesComplete(response) {
      _.each(response.data, function(message) {
        models.messages.push(message);
      });
      return models.messages;
    }

    function getMessagesFailed(err) {
      // log err
    }
  }

  function editMessage(newMessage) {
    return $timeout(function() {
      /* GET message from server based on ID
      PUT request to change message contents */
    }, 1000)
      .then(editMessageComplete)
      .catch(editMessageFailed);

    function editMessageComplete(response) {
      var old = _.find(models.messages, function(message) {
        return message.id == newMessage.id;
      });
      var x = _.merge(old, newMessage);
      $state.go('chat.add');
    }

    function editMessageFailed(err) {
      // log err
    }
  }

  function saveMessage(message) {
    return $timeout(function() {
      // POST to server
    }, 1000)
      .then(saveMessageComplete)
      .catch(saveMessageFailed);

    function saveMessageComplete(response) {
      /* would normally push 'response' instead of message */
      message.timestamp = new Date();
      message.id = models.messages.length+1;

      return models.messages.push(message);
    }

    function saveMessageFailed(err) {
      // log err
    }
  }

  function getUserMessages(userName) {
    return $timeout(function() {
      // GET to server to get a user's messages
    }, 1000)
      .then(getUserMessagesComplete)
      .catch(getUserMessagesFailed);

    function getUserMessagesComplete(response) {
      if(models.messages.length < 1) {
        getMessages();
      }

      return _.filter(models.messages, function(message) {
        return message.author == userName;
      });
    }

    function getUserMessagesFailed() {
      // log err
    }
  }
}]);