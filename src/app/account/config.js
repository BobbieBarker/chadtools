'use strict';

angular.module('chadTools.account.config', [])
  .config(function ($stateProvider){
    $stateProvider
      .state('account', {
        url: '/account',
        templateUrl: 'app/account/html/account.html',
        controller: 'accntCtrl',
        resolve: {
          currentAuth: function(fireBaseAuth){
            return fireBaseAuth.auth().$requireAuth();
          },
          currentUser: function($fireBaseUser, Session){
           return $fireBaseUser.user(Session.id).$asObject();
          },
          bulletinBoard: function($fireBaseBulletinBoard){
            return $fireBaseBulletinBoard.bulletinBoard().$asArray().$loaded().then(function(data){
              return data;
            });
          },
          taskList: function($fireBaseTasks){
            return $fireBaseTasks.taskList().$asArray().$loaded().then(function(data){
              return data;
            });
          },
          userList: function($fireBaseUser){
            return $fireBaseUser.userList().$asArray().$loaded().then(function(data){
              return data;
            });
          }
        }
      });
  });
