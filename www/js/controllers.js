angular
.module('starter.controllers', [])

.controller('UserListCtrl', function($scope, UserStrorage) {
  $scope.userList = UserStrorage.getUserList();

  $scope.enter = function (user){
    var date = new Date();
    user.TimeString = date.toLocaleTimeString();

  }

  $scope.clear = function (user){
    user.TimeString = '';
  }
})
;
