'use strict';
angular.module('chadTools.dashboard.task-list-directive', [])
  .directive('activeTaskList', function(){
    return {
      restrict: 'E',
      scope: {
        taskList: '=',
        userList: '=',
        currentUser: '=',
        taskType: '='
      },
      templateUrl: function(elem,attrs) {
        return attrs.templateUrl || 'app/dashboard/html/task-list-columns.html';
      },
      controller: 'activeTaskListCtrl',
    };
  }).controller('activeTaskListCtrl', function($scope){
    $scope.formVisible = false;
    $scope.order = {
      by: 'title',
      reverse: false
    };
    $scope.toggleFilter = 'Everyone';

    $scope.destroy = function(task){
      $scope.taskList.$remove(task);
    };

    $scope.start = function(task){
      task.started_at = moment().toISOString();
      task.status = 'development';
      $scope.taskList.$save(task);
    };

    $scope.completed = function(task){
      task.status = 'completed';
      $scope.taskList.$save(task);
    };

    $scope.markImportant = function(task){
      if(_.isUndefined(task.important)){
        task.important = true;
      }else{
        task.important = !task.important;
      }
      $scope.taskList.$save(task);
    };

    $scope.showForm = function(){
      $scope.formVisible = !$scope.formVisible;
    };

    $scope.sort = function(property){
      if(_.isEqual($scope.order.by, property)){
        $scope.order.reverse = !$scope.order.reverse;
      }else{
        $scope.order.by = property;
        $scope.order.reverse = true;
      }
    };

    $scope.$on('hideNewTaskForm', function(){
      $scope.formVisible = !$scope.formVisible;
    });
  });
