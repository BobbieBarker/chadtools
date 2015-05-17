'use strict';

angular.module('chadTools.auth.controller', [])
  .controller('createAccountCtrl', function($scope, $rootScope, $mdToast, fireBaseAuth, Session) {

    $scope.create = function(user){
      fireBaseAuth.auth().$createUser(user.email, user.password).then(function(data){
        return fireBaseAuth.auth().$authWithPassword({
          email: user.email,
          password: user.password
        });
      }).then(function(authData){
        //firebaseref causes an error need to use the object directly?
        //$fireBaseRef.$ref().child('users').child(authData.uid).set(authData);
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
