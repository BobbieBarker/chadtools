'use strict';
angular.module('chadTools.account.taskList', [])
  .directive('newTaskListForm', function(){
    return {
      restrict: 'E',
      scope: {
        bulletinBoard: '=',
        taskList: '='
      },
      templateUrl: 'app/account/html/new-task-list.html',
      controller: 'newTaskListFormCtrl',
    };
  })
  .controller('newTaskListFormCtrl', function($scope, $mdDialog, $mdToast){
    self = this;

    $scope.teamList = [
      {name: 'Development'},
      {name: 'Tech Support'},
      {name: 'Data Entry'},
      {name: 'Admin'}
    ];

    $scope.addTaskList = function(taskList){
      $scope.bulletinBoard.$add(taskList);
      $scope.taskList = {};
    };

    $scope.showAlert = function(ev, board){
      var confirm = $mdDialog.confirm()
      .title('WARNING')
      .content('This Action Will Result in the Deletion of this Task List and All Related Tasks, Proceed At Your Own Risk')
      .ok('Proceed')
      .cancel('Cancel')
      .targetEvent(ev);

      $mdDialog.show(confirm).then(function() {
        self.performDelete($scope.taskList, $scope.bulletinBoard, board);

        $mdToast.show({
          templateUrl: 'app/components/toasters/positive-feedback.html',
          controller: 'signInErrorCtrl',
          hideDelay: 3000,
          position: 'bottom left',
          resolve: {
            message: function(){
              return board.title + ' and all related tasks have been destroyed';
            }
          }
        });
      });
    };

    this.performDelete = function(taskList, bulletinBoard, board){
      _.forEach(taskList, function(task){
        if(_.isEqual(task.product, board.title)){
          taskList.$remove(task);
        }
      });
      bulletinBoard.$remove(board);
    };
  });
