describe('sign in controller', function(){
  var mockToast, mockSession, q;
  var mockAuth = {};
  var deferred = {};

  beforeEach(function(){
    module('chadTools.auth.sign-in', function($provide){
      
      mockToast ={show: jasmine.createSpy()};
      mockAuth.auth = function(){}
      mockAuth.authWithPassword = function(){}
      mockSession = {create: jasmine.createSpy()};

      $provide.value('fireBaseAuth', mockAuth);
      $provide.value('$mdToast', mockToast);
      $provide.value('Session', mockSession);
    })

    inject(function($controller, _$rootScope_, _$q_){
      $q = _$q_;
      $scope = {};
      $rootScope = _$rootScope_;
      spyOn($rootScope, '$broadcast').and.callThrough();
      spyOn(mockAuth, 'authWithPassword').and.callFake(function(){
        deferred =$q.defer();
        return deferred.promise;
      });
      spyOn(mockAuth, 'auth').and.callFake(function(){
        return {
          $authWithPassword: function(){
            return mockAuth.authWithPassword();
          }
        };
      });
      $controller('signInCtrl', {$scope: $scope});
    });
  });

  it('should define submit as a function on scope', function(){
    expect($scope.submit).toBeDefined();
    expect($scope.submit).toEqual(jasmine.any(Function))
  });

  describe('should call fireBaseAuth', function(){
    beforeEach(function(){
      var user = {email: 'bob@email.com', password: '12346'};
      $scope.submit(user);

    });

    describe('with a resolved promise', function(){
      beforeEach(function(){
        var authData = {uid: 123, token: 456};
        deferred.resolve(authData);
        $rootScope.$apply();
      })
      it('auth() and authWithPassword should be called', function(){
        expect(mockAuth.auth).toHaveBeenCalled();
        expect(mockAuth.authWithPassword).toHaveBeenCalled();
      });

      it('should call Session.create and rootScope.$broadcast', function(){
        expect(mockSession.create).toHaveBeenCalled();
        expect($rootScope.$broadcast).toHaveBeenCalled();
        expect(mockToast.show).not.toHaveBeenCalled();
      });
    });

    describe('promise is rejected', function(){
      beforeEach(function(){
        deferred.reject();
        $rootScope.$apply();
      });
      it('should call mdToast.show when promise is rejected', function(){
        expect(mockToast.show).toHaveBeenCalled();
      });
    });
  });
});
