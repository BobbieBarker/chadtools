'use strict';
angular.module('chadTools.dashboard.create-task-directive', [])
  .directive('newTaskForm', function(){
    return {
      restrict: 'E',
      scope: {
        taskList: '=',
        userList: '=',
        currentUser: '=',
        taskType: '=',
      },
      templateUrl: 'app/dashboard/html/new-task-form.html',
      controller: 'newTaskFormCtrl',
    };
  }).controller('newTaskFormCtrl', function($scope){
    $scope.addTask = function(task){
      task.created_at = moment().toISOString();
      task.creator = $scope.currentUser.$id;
      task.product = $scope.taskType;
      task.important = false;
      task.type = $scope.currentUser.team;
      $scope.taskList.$add(task);
      $scope.task = {};
      $scope.$emit('hideNewTaskForm');
    };
  });
