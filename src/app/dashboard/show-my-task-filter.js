'use strict';
angular.module('chadTools.dashboard.my-task-filter', [])
  .filter('myTasks', function(){
    return function(taskList, toggleFilter, currentUser){
      var myTaskList = [];
      if(_.isEqual(toggleFilter, 'Me')){
        _.forEach(taskList, function(task){
          _.forEach(task.assignee, function(assignee){
            if(_.isEqual(assignee.uid, currentUser.$id)){
              myTaskList.push(task);
            }
          });
        });
        return myTaskList;
      }

      return taskList;
    };
  });
