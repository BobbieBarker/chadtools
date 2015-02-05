describe('account details controller', function(){
  var accntDetailsCtrl, $scope
  beforeEach(function(){
    module('chadTools.account.accountDetails', 'my.templates', function($provide){
      $provide.value('teamList', [
        {name: 'Development'},
        {name: 'Tech Support'},
        {name: 'Data Entry'},
        {name: 'Admin'}
      ])
    })

    inject(function($controller){
      $scope = {};
      user = {$save: jasmine.createSpy()}
      $controller('accntDetailsCtrl', {$scope: $scope})
    })
  })

  it('should define teamList in scope as a collection', function(){
    expect($scope.teamList).toBeDefined();
    expect(angular.isArray($scope.teamList)).toBe(true);
    expect(angular.isObject($scope.teamList[0])).toBe(true);
  })

  it('should define updateUser in scope as a function', function(){
    expect($scope.updateUser).toBeDefined();
    expect($scope.updateUser).toEqual(jasmine.any(Function));
  })

  it('should call save on the user object when $scope.updateUser is called', function(){
    $scope.updateUser(user);
    expect(user.$save).toHaveBeenCalled();
  })
})
