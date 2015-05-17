'use strict';

angular.module('chadTools.dashboard.config', [])
  .config(function ($stateProvider){
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/html/dashboard.html',
        controller: 'dashBoardCtrl',
        resolve: {
          currentAuth: function(fireBaseAuth){
            return fireBaseAuth.auth().$requireAuth();
          },
          currentUser: function($fireBaseUser, Session){
           return $fireBaseUser.user(Session.id).$loaded().then(function(data){
                return data;
             });
          },
          userList: function($fireBaseUser){
            return $fireBaseUser.userList().$loaded().then(function(data){
                return data;
             });
          },
          taskList: function($fireBaseTasks){
             return $fireBaseTasks.taskList().$loaded().then(function(data){
               console.log(data)
                return data;
             });
          },
          bulletinBoard: function($fireBaseBulletinBoard){
            return $fireBaseBulletinBoard.bulletinBoard().$loaded().then(function(data){
              return data;
            })
          }
        }
      });
  });
