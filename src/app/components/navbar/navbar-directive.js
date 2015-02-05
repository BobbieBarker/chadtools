'use strict';
angular.module('chadTools.nav')
  .directive('projectNav', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: 'navCtrl'
    }

  }).controller('navCtrl', function($scope, $rootScope, $fireBaseUser, $fireBaseTasks, $mdSidenav, $mdToast, $mdBottomSheet, Session, fireBaseAuth){
    $scope.user = $fireBaseUser.user(Session.id).$asObject();
    $scope.user.$loaded().then(function(data){
      var emailName = data.password.email.split('@');
      $scope.displayname = emailName[0];
    });

    $fireBaseTasks.taskList().$asArray().$loaded().then(function(data){
      $scope.taskList = data;
    });

    $scope.logout = function(){
      Session.logout();
      $rootScope.$broadcast('logout');
      fireBaseAuth.auth().$unauth();
      $mdToast.show({
        templateUrl: 'app/components/toasters/informmative-toaster.html',
        controller: 'signInErrorCtrl',
        hideDelay: 3000,
        position: 'bottom left',
        resolve: {
          message: function(){
            return 'You have been successfully logged out!';
          }
        }
      });
    };

    $scope.shotBottomGrid = function($event){
      $mdBottomSheet.show({
        templateUrl: 'app/components/navbar/navigation-dropdown.html',
        controller: 'bottomSheetCtrl',
        targetEvent: $event,
        resolve: {
          user: function(){
            return $scope.user
          }
        }
      })
    }

    $scope.toggleRight = function() {
      $mdSidenav('right').toggle();
    };


  }).controller('bottomSheetCtrl', function($scope, $mdBottomSheet, $mdSidenav, user){

    $scope.user = user;

    $scope.hideSheet = function(){
      $mdBottomSheet.hide();
    };

    $scope.toggleRight = function() {
      $mdSidenav('right').toggle();
    };
  });
