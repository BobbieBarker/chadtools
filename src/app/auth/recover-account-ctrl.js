'use strict';

angular.module('chadTools.auth.recovery', [])
  .controller('accntRecoveryCtrl', function($scope, fireBaseAuth, $mdToast, $state){
    $scope.submit = function(user){
      fireBaseAuth.auth().$sendPasswordResetEmail(user.email).then(function(){
        $mdToast.show($mdToast.simple().content('Check your email to get your new temporary password and login'));
        $state.go('sign-in');
      }).catch(function(error){
        if(_.isEqual(error.code, 'INVALID_USER')){
          $mdToast.show({
            templateUrl: 'app/components/toasters/bad-login-toast.html',
            controller: 'signInErrorCtrl',
            hideDelay: 6000,
            position: 'left right',
            resolve: {
              message: function(){
                return error.message
              }
            }
          })
        }
      })
    }
  });
