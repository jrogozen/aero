app.factory('User', ['$http', '$timeout', function($http, $timeout) {
  var models = {
    users: []
  };

  return {
    models: models,
    getUsers: getUsers
  };

  function getUsers() {
    if(models.users.length > 0) {
      return models.users;
    }

    /* once there is a backend/authentication system, this would be replaced with a call to the server
    instead of grabbing users from stored messages */
    return $http.get('fixtures/messages.json')
      .then(getUsersComplete)
      .catch(getUsersFailed);

      function getUsersComplete(response) {
        var authors = [];
        _.each(response.data, function(message) {
          authors.push(message.author);
        });
        models.users = _.uniq(authors);
      }

      function getUsersFailed() {
        // log err;
      }
  }
}]);