'use strict';
angular.module('chadTools.dashboard.controller', [])
  .controller('dashBoardCtrl', function($scope, $filter, currentUser, userList, taskList, bulletinBoard, taskToaster){

    //This filter looks for tasks that have already been shipped and updates their status to completed.
    $scope.taskList = ($filter)('completedTaskFilter')(taskList);
    $scope.userList = userList;
    $scope.currentUser = currentUser;
    $scope.switchTasks = 'Active Tasks';
    $scope.bulletinBoard = bulletinBoard;

    $scope.toggleView = function(){
      if(_.isUndefined(currentUser.dashView)){
        currentUser.dashView = true;
      }else{
        currentUser.dashView = !currentUser.dashView;
      }
      currentUser.$save();
    };

    taskList.$watch(function(event){
      taskToaster.detectToast(event, taskList);
    });
  });
