app.factory('User', ['$http', '$timeout', '$log', function($http, $timeout, $log) {
  var models = {
    users: []
  };

  return {
    models: models,
    getUsers: getUsers,
    getName: getName
  };

  function getUsers() {
    if(models.users.length > 0) {
      return models.users;
    }

    /* once there is a backend/authentication system, this would be replaced with a call to the server
    instead of grabbing users from stored messages */
    return $http.get('fixtures/users.json')
      .then(getUsersComplete)
      .catch(getUsersFailed);

      function getUsersComplete(response) {
        models.users = response.data;
      }

      function getUsersFailed() {
        $log.warn(err);
      }
  }

  function getName(userId) {
    return $timeout(function(){
      /* GET request to server for users matching that ID */
    }, 100)
      .then(getNameComplete)
      .catch(getNameFailed);

    function getNameComplete(response) {
      return _.find(models.users, function(user) {
        return user.id == userId;
      });
    }

    function getNameFailed(err) {
      $log.warn(err);
    }
  }
}]);