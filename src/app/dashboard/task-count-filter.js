'use strict';
angular.module('chadTools.dashboard.task-count-filter', [])
  .directive('taskCountDisplay', function(){
    return {
      restrict: 'E',
      scope: {
        taskList: '=',
        currentUser: '='
      },
      templateUrl: 'app/dashboard/html/task-count.html',
      controller: function($scope){

      }
    };
  })
  .filter('taskCount', function(){
    return function(taskList, team, countType){
      if(_.isEqual(team, 'Development')){
        if(_.isUndefined(countType)){
         return _.filter(taskList, function(task){
            if(!_.isEqual(task.product, 'Data Entry')){
              return task;
            }
          }).length;
        }else if(_.isEqual(countType, 'active')){
          return _.filter(taskList, function(task){
            if(!_.isEqual(task.status, 'completed') && !_.isEqual(task.product, 'Data Entry')){
              return task;
            }
          }).length;
        }else if(_.isEqual(countType, 'completed')){
          return _.filter(taskList, function(task){
             if(_.isEqual(task.status, 'completed') && !_.isEqual(task.product, 'Data Entry')){
              return task;
            }
          }).length;
        }
      }else if(_.isEqual(team, 'Data Entry')){
        if(_.isUndefined(countType)){
         return _.filter(taskList, function(task){
            if(_.isEqual(task.product, 'Data Entry')){
              return task;
            }
          }).length;
        }else if(_.isEqual(countType, 'active')){
          return _.filter(taskList, function(task){
            if(!_.isEqual(task.status, 'completed') && _.isEqual(task.product, 'Data Entry')){
              return task;
            }
          }).length;
        }else if(_.isEqual(countType, 'completed')){
          return _.filter(taskList, function(task){
             if(_.isEqual(task.status, 'completed') && _.isEqual(task.product, 'Data Entry')){
              return task;
            }
          }).length;
        }
      }else if(_.isEqual(team, 'Admin')){
        if(_.isUndefined(countType)){
         return _.filter(taskList, function(task){
            return task;
          }).length;
        }else if(_.isEqual(countType, 'active')){
          return _.filter(taskList, function(task){
            if(!_.isEqual(task.status, 'completed')){
              return task;
            }
          }).length;
        }else if(_.isEqual(countType, 'completed')){
          return _.filter(taskList, function(task){
             if(_.isEqual(task.status, 'completed')){
              return task;
            }
          }).length;
        }
      }
    };
  });
