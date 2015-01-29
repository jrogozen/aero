app.factory('Message', ['$http', '$timeout', function($http, $timeout) {
  var models = {
    messages: []
  };

  return {
    models: models,
    getMessages: getMessages,
    saveMessage: saveMessage,
  };

  function getMessages() {
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

  function saveMessage(message) {
    return $timeout(function() {
      // post to server
    }, 1000)
      .then(saveMessageComplete)
      .catch(saveMessageFailed);

    function saveMessageComplete(response) {
      message.timestamp = new Date();
      message.id = models.messages.length+1;
      return models.messages.push(message);
    }

    function saveMessageFailed(err) {
      // log err
    }
  }

  // function getMessages() {
  //   return $http.get('fixtures/messages.json')
  //     .then(getMessagesComplete)
  //     .catch(getMessagesFailed);  

  //   function getMessagesComplete(response) {
  //     return response.data;
  //   }

  //   function getMessagesFailed(error) {
  //     // log error
  //   } 
  // }

  // function saveMessage(message) {
  //   /* once backend is implemented, will create POST request to server API. 
  //   For now, emulating with $timeout */

  //   return $timeout(function() {
  //     return message;
  //   }, 1000);
  // }

  // function findMessage(id, messages) {
  // }
}]);