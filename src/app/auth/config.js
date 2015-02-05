'use strict';

angular.module('chadTools.auth.config', [])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('sign-in', {
        url: '/sign-in',
        templateUrl: 'app/auth/html/sign-in.html',
        controller: 'signInCtrl'
      })
      .state('create-acount', {
        url: '/create-account',
        templateUrl: 'app/auth/html/create-account.html',
        controller: 'createAccountCtrl'
      })
      .state('recover-account', {
        url: '/recover-account',
        templateUrl: 'app/auth/html/recover-account.html',
        controller: 'accntRecoveryCtrl'
      });
     $urlRouterProvider.otherwise('/sign-in');
  });
