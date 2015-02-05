'use strict';
angular.module('team-filter', [])
  .filter('teamFilter', function(){
    return function(userList, currentTeam, taskType){
      if(_.isEqual(currentTeam, 'Admin')){
        if(!_.isEqual(taskType, 'Data Entry')){
          var userTeam = _.filter(userList, {'team': currentTeam});
          var productTeam = _.filter(userList, {'team': 'Development'});
          return _.union(userTeam, productTeam);
        }else if(_.isEqual(taskType, 'Data Entry')){
          var userTeam = _.filter(userList, {'team': currentTeam});
          var productTeam = _.filter(userList, {'team': 'Data Entry'});
          return _.union(userTeam, productTeam);
      }
    }
      return _.filter(userList, {'team': currentTeam});
    };
  });
