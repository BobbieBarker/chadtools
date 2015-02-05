'use strict';
angular.module('name-filter', [])
  .filter('nameFilter', function(){
    return function(userList){
      _.forEach(userList, function(user){
        if(_.has(user, 'firstName')){
          user.fullname = user.firstName + ' ' + user.lastName;
        }
      });
      return userList;
    };
  });