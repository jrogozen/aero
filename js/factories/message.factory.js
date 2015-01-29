app.factory('Message', ['$http', '$log', '$timeout', function($http, $log, $timeout) {
  return {
    getMessages: getMessages,
    saveMessage: saveMessage,
    editMessage: editMessage,
    findMessage: findMessage
  };

  function getMessages() {
    return $http.get('fixtures/messages.json')
      .then(getMessagesComplete)
      .catch(getMessagesFailed);  

    function getMessagesComplete(response) {
      return response.data;
    }

    function getMessagesFailed(error) {
      // log error
    } 
  }

  function saveMessage(message) {
    /* once backend is implemented, will create POST request to server API. 
    For now, emulating with $timeout */

    return $timeout(function() {
      return message;
    }, 1000);
  }

  function findMessage(id, messages) {
  }

  function editMessage(message) {
    /* once backend is implemented, this would do a GET request to server for
    original message based on id, then a PUT request to modify it with new values */

    return $timeout(function() {
      return message;
    }, 1000);
  }
}]);