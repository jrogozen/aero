app.controller('userCtrl', ['$scope', '$stateParams', 'Message', 'User', function($scope, $stateParams, Message, User) {
  $scope.users = [];

  function getUsers() {
    if(User.models.users.length < 1) {
      return User.getUsers()
        .then(function(data) {
          console.log(User.models.users);
          $scope.users = User.models.users;
        });
    }
    $scope.users = User.models.users;
  }

  getUsers();
}]);