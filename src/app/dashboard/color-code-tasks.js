'use strict';
angular.module('chadTools.dashboard.color-coding', [])
  .directive('colorCodeTask', function(){
    return {
      restrict: 'A',
      scope: {
        task: '='
      },
      link: function(scope, element, attrs){
        scope.$watch('task.status', function(data){
          removeClasses();
          colorCoder(data);
        })

        var colorCoder = function(taskStatus){
          switch (taskStatus){
            case 'test':
              element.addClass('task-testing');
              break;
            case 'development':
              element.addClass('task-dev');
              break;
            case 'shipped':
              element.addClass('task-shipped');
              break;
            case 'deploy':
              element.addClass('task-ship');
              break;
            }
        }

        var removeClasses = function(){
          element.removeClass('task-testing');
          element.removeClass('task-dev');
          element.removeClass('task-shipped');
          element.removeClass('task-ship');
        }
      }
    }
  })
