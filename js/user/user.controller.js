app.controller('userCtrl', ['$scope', '$stateParams', 'Message', 'User', function($scope, $stateParams, Message, User) {
  $scope.users = [];
  $scope.messages = [];

  function getUsers() {
    if(User.models.users.length < 1) {
      return User.getUsers()
        .then(function(data) {
          $scope.users = User.models.users;
        });
    }
    $scope.users = User.models.users;
  }

  function getUserMessages(userId) {
    User.getName(userId)
      .then(function(data) {
        Message.getUserMessages(data.name)
        .then(function(data) {
          if (data.length < 1) {
            // no posts found
          }
          
          $scope.messages = data;
        });
      });
  }

  if($stateParams.id) {
    getUserMessages($stateParams.id);
  }

  getUsers();
}]);