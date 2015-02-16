describe('user management directive', function(){
  var userList, user;
  beforeEach(function(){
    module('chadTools.account.userManagement', 'my.templates')
    angular.mock.module('name-filter')

    inject(function($controller){
      $scope = {};
      $scope.userList = jasmine.createSpyObj('userList', ['$save', '$remove']);
      $controller('userManagementCtrl', {$scope: $scope})
    })
  })

  it('should define updateuser in scope as a function', function(){
    expect($scope.updateUser).toBeDefined();
    expect($scope.updateUser).toEqual(jasmine.any(Function));
  })

  it('should call $save on userList object when $scope.UpdateUser is called', function(){
    $scope.updateUser(user);
    expect($scope.userList.$save).toHaveBeenCalled();
  })

  it('should define destroyUser in scope as a function', function(){
    expect($scope.destroyUser).toBeDefined();
    expect($scope.destroyUser).toEqual(jasmine.any(Function));
  })

  it('should call $remove on userList when $scope.destroyUser is called', function(){
    $scope.destroyUser(user);
    expect($scope.userList.$remove).toHaveBeenCalled();
  })
})
