'use strict';
angular.module('chadTools.dashboard.developer-completed-task-list-directive', [])
  .directive('developerCompletedTaskList', function(){
    return {
      scope: {
        taskList: '=',
        currentUser: '=',
        switchTasks: '=',
        bulletinBoard: "="
      },
      templateUrl: 'app/dashboard/html/developer-completed-task-list-directive.html',
      controller: function($scope){

      }
    }
  });
