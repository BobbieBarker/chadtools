'use strict';
angular.module('chadTools.dashboard.completed-task-filter', [])
  .filter('completedTaskFilter', function(){
    return function(taskList){
      _.forEach(taskList, function(task){
        if(_.isEqual(task.status, 'shipped')){
          if(moment().dayOfYear() > moment(task.started_at).dayOfYear()){
            task.status = 'completed';
            taskList.$save(task);
          }
        }
      })
      return taskList
    }
  })
