'use strict';
angular.module('chadTools.dashboard.sidebar', [])
  .directive('dashboardTaskSidebar', function(){
    return {
      scope: {
        taskList: '='
      },
      transclude: true,
      templateUrl: 'app/dashboard/html/dashboard-sidebar.html',
      controller: function($scope, $mdSidenav){

        $scope.setToTest = function(task){
          return function(fromSideBar){
            fromSideBar.status = 'test';
            saveTask(fromSideBar);
          };
        };

        $scope.setToDevelopment = function(task){
          return function(fromSideBar){
            fromSideBar.status = 'development';
            saveTask(fromSideBar);
          };
        };

        $scope.setToDeploy = function(task){
          return function(fromSideBar){
            fromSideBar.status = 'deploy';
            saveTask(fromSideBar);
          };
        }

        $scope.setToDeployed = function(task){
          return function(fromSideBar){
            fromSideBar.status = 'shipped';
            saveTask(fromSideBar);
          };
        }

        $scope.completed = function(task){
          task.status = 'completed';
          $scope.taskList.$save(task);
        };

        $scope.close = function() {
          $mdSidenav('right').close();
        };

        function saveTask(task){
          var indexOfTask = $scope.taskList.$indexFor(task.$id);
          $scope.taskList[indexOfTask] = task;
          $scope.taskList.$save(indexOfTask);
        };
      }
    }
  })
