'use strict';
angular.module('chadTools.account.controller', [])
  .controller('accntCtrl', function($scope, currentUser, bulletinBoard, taskList, userList){
    $scope.user = currentUser;
    $scope.bulletinBoard = bulletinBoard;
    $scope.taskList = taskList;
    $scope.userList = userList;
  });
