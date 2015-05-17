'use strict';

angular.module('chadTools.firebase.eb-firebase', [])
  .provider('fireBaseRef', function(){
    this.url = 'https://luminous-fire-8011.firebaseio.com/';
    this.$get = function($log, Firebase){
      if(_.isNull(this.url)){
        $log.error('Fire Base Requires a Valid URL');
      }else{
        return new Firebase(this.url);
      }
    };
  }).factory('$fireBaseRef', function($firebase, fireBaseRef){
    return $firebase(fireBaseRef);
  }).service('fireBaseAuth', function($log, fireBaseRef, $firebaseAuth){
    this.auth = function(user){
      return $firebaseAuth(fireBaseRef);
    };
  }).service('$fireBaseUser', function($firebaseObject, $firebaseArray, fireBaseRef){
    this.user = function(user){
      return $firebaseObject(fireBaseRef.child('users').child(user));
    };
    this.userList = function(){
      return $firebaseArray(fireBaseRef.child('users'));
    };
  }).service('$fireBaseTasks', function($firebaseArray, fireBaseRef){
    this.taskList = function(){
      return $firebaseArray(fireBaseRef.child('taskList'));
    };
  }).service('$fireBaseBulletinBoard', function($firebaseArray, fireBaseRef){
    this.bulletinBoard = function(){
      return $firebaseArray(fireBaseRef.child('bulletinBoard'));
    };
  });
