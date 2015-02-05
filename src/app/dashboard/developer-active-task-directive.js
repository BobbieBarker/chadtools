'use strict';
angular.module('chadTools.dashboard.developer-active-task-directive', [])
  .directive('develeoperActiveTaskList', function(){
    return {
      restrict: 'E',
      scope: {
        taskList: '=',
        userList: '=',
        currentUser: '=',
        switchTasks: '=',
        bulletinBoard: '='
      },
      templateUrl: 'app/dashboard/html/developer-active-task-list.html',
      controller: function($scope){

      }
    };
  });
