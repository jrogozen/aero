app.factory('Message', ['$http', '$log', '$timeout', function($http, $log, $timeout) {
  return {
    getMessages: getMessages,
    saveMessage: saveMessage
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
}]);