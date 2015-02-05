'use strict';
angular.module('chadTools.dashboard.task-list-filter', [])
  .filter('taskCategoryFilter', function(){
    return function(taskList, type){
      return _.filter(taskList, function(task){
        if(_.isEqual(task.product, type)){
          return task;
        }
      });
    };
  });
