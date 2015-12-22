angular
.module('starter.controllers', [])

.controller('UserListCtrl', function($scope, UserStrorage) {
  $scope.userList = UserStrorage.all();
})
;
