'use strict';
angular.module('chadTools.account.accountDetails', [])
  .directive('accountDetailsForm', function(){
    return {
      restrict: 'E',
      scope: {
        user: '='
      },
      templateUrl: 'app/account/html/account-form.html',
      controller: 'accntDetailsCtrl',
    };
  })
  .controller('accntDetailsCtrl', function($scope){

    $scope.updateUser = function(user){
      user.$save();
    };

    $scope.teamList = [
      {name: 'Development'},
      {name: 'Tech Support'},
      {name: 'Data Entry'},
      {name: 'Admin'}
    ];
});
