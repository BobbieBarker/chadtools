'use strict';
angular.module('task-duration', [])
  .directive('taskDuration', function($interval){
    return {
      restrict: 'A',
      scope: {
        task: '='
      },
      link: function(scope, element, attrs){
        function updateDuration(){
          if (moment(scope.task).fromNow() === 'a few seconds ago') {
            element.text('seconds ago');
          } else {
            element.text(moment(scope.task).fromNow());
          }
        }
        $interval(updateDuration, 1000);
      }
    };
  });
