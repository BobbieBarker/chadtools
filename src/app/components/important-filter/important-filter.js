'use strict';
angular.module('is-important-filter', [])
  .filter('starred', function(){
    return function(Array){
      return _.map(_.sortBy(Array, 'important')).reverse();
    };
  });
