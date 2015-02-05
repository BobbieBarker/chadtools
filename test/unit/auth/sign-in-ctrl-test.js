describe('sign in controller', function(){
  var mockToast, mockSession;
  mockAuth = {};
  mockAuth.auth = {auth: jasmine.createSpy()}
  mockAuth.auth.$authWithPassword = {$authWithPassword: jasmine.createSpy()}
  beforeEach(function(){
    module('chadTools.auth.sign-in', function($provide){
      $provide.value('$mdToast', mockToast);
      $provide.value('fireBaseAuth', mockAuth);
      $provide.value('Session', mockSession);
    })

    inject(function($controller, _$rootScope_){
      $scope = {};
      $rootScope = _$rootScope_;

      $controller('signInCtrl', {$scope: $scope});
    })
  })

  it('should define submit as a function on scope', function(){
    expect($scope.submit).toBeDefined();
    expect($scope.submit).toEqual(jasmine.any(Function))
  })

  it('should call fireBase Auth', function(){
    var user = {email: 'bob@email.com', password: '12346'};
    //$scope.submit(user)
    //expect(fireBaseAuth.auth.$authWithPassword).toHaveBeenCalled()

  })
})
