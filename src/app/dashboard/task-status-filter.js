'use strict';
angular.module('chadTools.dashboard.task-status-filter', [])
  .filter('taskStatus', function(){
    return function(taskList){
      return _.filter(taskList, function(task){
        if(!_.has(task, 'status') || !_.isEqual(task.status, 'completed')){
          return task;
        }
      });
    };
  });
