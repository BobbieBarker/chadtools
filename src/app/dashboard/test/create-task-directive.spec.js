describe('new task form directive', function(){
  var task = {title: 'test1'};
  beforeEach(function(){
    module('chadTools.dashboard.create-task-directive', 'my.templates')
    inject(function($controller){
      $scope = {};
      $scope.taskList = {$add: jasmine.createSpy()};
      $scope.currentUser = {$id: '1', team: 'Development'};
      $scope.taskType = 'testy'
      $scope.$emit = jasmine.createSpy();
      $controller('newTaskFormCtrl', {$scope: $scope})
    })
  })

  it('should define addTask on the scope as a function', function(){
    expect($scope.addTask).toBeDefined();
    expect($scope.addTask).toEqual(jasmine.any(Function));
  })

  it('should call $add, $emit, and restore task to an empty object', function(){
    $scope.addTask(task);
    expect($scope.taskList.$add).toHaveBeenCalled();
    expect(_.isEmpty($scope.task)).toBe(true);
    expect($scope.$emit).toHaveBeenCalled()
  })
})
