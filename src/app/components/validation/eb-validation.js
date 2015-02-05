'use strict';
angular.module('eb-validation.validations', [])
.filter('emailFilter', function(){
  return function(email){
    if(!email){
      return '';
    }
    if(/^((?:(?:(?:[a-zA-Z0-9][\.\-\+_]?)*)[a-zA-Z0-9])+)\@((?:(?:(?:[a-zA-Z0-9][\.\-_]?){0,62})[a-zA-Z0-9])+)\.([a-zA-Z0-9]{2,6})$/.test(email)){
      return true;
    }
  };
})
.directive('emailInput', function($filter){
  return{
    require: 'ngModel',
    restrict: 'A',
    scope: {
      emailInput: '=',
    },
    link: function(scope, element, attrs, ngModelCtrl){
      var data;

      function validateEmail(){
        if(_.isEqual(data, true)){
          ngModelCtrl.$setValidity('email', true);
          scope.$apply();
          return;
        }else{
          ngModelCtrl.$setValidity('email', false);
          scope.$apply();
          return;
        }
      }

      scope.$watch('emailInput', function(email){
        if(!_.isUndefined(email)){
          data = $filter('emailFilter')(email);
          debounceValidateEmail();
        }
      });

      var debounceValidateEmail = _.debounce(validateEmail, 1000, {
        leading: false,
        trailing: true
      });
    }
  };
})
.filter('passwordFilter', function(){
  return function(password){
    if(!password){
      return '';
    }
    if(/(?=^.{8,30}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;&quot;:;'?/&gt;.&lt;,]).*$/.test(password)){
      return true;
    }
  };
})
.directive('passwordInput', function($filter){
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      passwordInput: '=',
    },
    link: function(scope, element, attrs, ngModelCtrl){
      var data;
      function validatePassword(){
        if(_.isEqual(data, true)){
          ngModelCtrl.$setValidity('password', true);
          scope.$apply();
          return;
        }else{
          ngModelCtrl.$setValidity('password', false);
          scope.$apply();
          return;
        }
      }
      scope.$watch('passwordInput', function(password){
        if(!_.isUndefined(password)){
          data = $filter('passwordFilter')(password);
          debounceValidatePassword();
        }
      });

      var debounceValidatePassword = _.debounce(validatePassword, 500, {
        leading: false,
        trailing: true
      });

    }
  };
});
