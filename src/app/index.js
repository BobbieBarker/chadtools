'use strict';
 angular.module('chadTools', [
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'ngAria',
  'chadTools.auth',
  'chadTools.dashboard',
  'chadTools.account',
  'chadTools.nav'
  ]).config(function($mdThemingProvider){
    var successGreenMap = $mdThemingProvider.extendPalette('pink', {
      '900': '1B5E20'
    });
    $mdThemingProvider.definePalette('successGreen', successGreenMap);

     $mdThemingProvider.definePalette('amazingPaletteName', {
      '50': 'F3E5F5',
      '100': 'E1BEE7',
      '200': 'CE93D8',
      '300': 'BA68C8',
      '400': 'AB47BC',
      '500': '9C27B0',
      '600': '8E24AA',
      '700': '7B1FA2',
      '800': '6A1B9A',
      '900': '4A148C',
      'A100': 'EA80FC',
      'A200': 'E040FB',
      'A400': 'D500F9',
      'A700': 'AA00FF',

      'contrastDefaultColor': 'light',
      'contrastDarkColors': [
      '50', '100', '200', '300', '400', 'A100'
      ],
      'contrastLightColors': undefined

    });

    $mdThemingProvider.theme('default')
      .primaryPalette('amazingPaletteName', {
        'default': '900',
        'hue-1': '800',
        'hue-2': '700',
        'hue-3': '300'
      }).accentPalette('successGreen', {
        'default': '500',
        'hue-1': '900',
        'hue-2': '600'
      })
  }).controller('chadToolsCtrl', function($scope, $rootScope, $state, Session, fireBaseAuth){

    $scope.$on('auth-login-success', function(data){
      $state.go('dashboard');
    });

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, error){
      console.log()
      if((_.isEqual(fromState.name, 'sign-in') || _.isEqual(fromState.name, 'create-acount')) && _.isEqual(toState.name, 'dashboard')){
        $scope.currentUser = Session.firebaseToken;
      }
    });

    $scope.$on('logout', function(){
      console.log('fook')
      $scope.currentUser = false;
    });

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      if (_.isEqual(error, 'AUTH_REQUIRED')) {
        $state.go('sign-in');
      }
    });

    //Keeps logged in users data on the scope in case of page reload
    fireBaseAuth.auth().$requireAuth().then(function(data){
      $scope.currentUser = Session.firebaseToken;
    });
  });
