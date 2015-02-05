'use strict';
angular.module('chadTools.dashboard.task-toaster-factory', [])
  .factory('taskToaster', function($mdToast){
    function _detectToast(event, taskList){
      switch(event.event){
        case 'child_changed':
          var task = taskList.$getRecord(event.key);
          $mdToast.show({
            templateUrl: 'app/components/toasters/informmative-toaster.html',
            controller: 'signInErrorCtrl',
            hideDelay: 3000,
            position: 'bottom left',
            resolve: {
              message: function(){
                return task.title + ' has been updated.';
              }
            }
          });
          break;
        case 'child_added':
          var task = taskList.$getRecord(event.key);
          $mdToast.show({
            templateUrl: 'app/components/toasters/positive-feedback.html',
            controller: 'signInErrorCtrl',
            hideDelay: 3000,
            position: 'bottom left',
            resolve: {
              message: function(){
                return task.title + ' has been created.';
              }
            }
          });
          break;
      }
    }

    return {
      detectToast: _detectToast
    };
  });
