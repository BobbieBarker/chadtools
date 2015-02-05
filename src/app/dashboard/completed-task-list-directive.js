'use strict';
angular.module('chadTools.dashboard.completed-task-list-directive', [])
  .directive('completedTaskList', function(){
    return {
      restrict: 'E',
      scope: {
        taskList: '=',
        taskType: '='
      },
      templateUrl: function(elem,attrs) {
        return attrs.templateUrl || 'app/dashboard/html/completed-task-list-columns.html'
      },
      controller: 'completedTaskListCtrl',
    }
  })
  .controller('completedTaskListCtrl', function($scope){
    $scope.resumeTask = function(task){
      task.status = 'active';
      $scope.taskList.$save(task);
    }

    $scope.destroy = function(task){
      $scope.taskList.$remove(task)
    }
  });
