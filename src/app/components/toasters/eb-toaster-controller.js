'use strict';
angular.module('chadTools.toasters', [])
  .controller('signInErrorCtrl', function($scope, message){
    $scope.message = message;
  });
