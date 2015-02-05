'use strict';
angular.module('chadTools.dashboard.task-sorting-filter', [])
  .filter('sortTask', function(){
    return function(taskList, property, reverse){
      var sortedList = [];
      if(_.isEqual(property, 'assignee')){
        sortedList = _.sortBy(taskList, function(task){
          return task.assignee[0].fullname;
        });
      }else if(_.isEqual(property, 'title')){
        sortedList = _.sortBy(taskList, property);
      }else if(_.isEqual(property, 'created_at')){
        sortedList = _.sortBy(taskList, function(task){
          return moment(task.created_at).valueOf();
        });
      }
      if(_.isEqual(reverse, true)){
        sortedList.reverse();
      }
      return sortedList;
    };
  });
