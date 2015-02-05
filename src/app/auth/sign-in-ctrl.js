'use strict';
angular.module('chadTools.auth.sign-in', [])
  .controller('signInCtrl', function($scope, $rootScope, $mdToast, fireBaseAuth, Session) {
    $scope.submit = function(user){
      fireBaseAuth.auth().$authWithPassword({
          email: user.email,
          password: user.password
        }).then(function(authData){
          Session.create(authData.uid, authData.token);
          $rootScope.$broadcast('auth-login-success', authData);
        }).catch(function(error){
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
        });

    };
  });
