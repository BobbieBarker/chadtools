'use strict';
angular.module('chadTools.account.userManagement', [])
  .directive('userManagement', function(){
    return{
      restrict: 'E',
      scope: {
        userList: '='
      },
      templateUrl: 'app/account/html/user-management.html',
      controller: 'userManagementCtrl',
    };
  }).controller('userManagementCtrl', function($scope){
    $scope.updateUser = function(user){
      $scope.userList.$save(user);
    };

    $scope.destroyUser = function(user){
      $scope.userList.$remove(user);
    };
  });
