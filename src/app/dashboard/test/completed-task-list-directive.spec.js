describe('completd task list directive', function(){
  var task = {status: 'completed'};
  beforeEach(function(){
    module('chadTools.dashboard.completed-task-list-directive', 'my.templates')
    inject(function($controller){
      $scope = {};
      $scope.taskList = jasmine.createSpyObj('taskList', ['$save', '$remove']);
      $controller('completedTaskListCtrl', {$scope: $scope})
    })
  })

  it('should define resume task on the scope as a function', function(){
    expect($scope.resumeTask).toBeDefined();
    expect($scope.resumeTask).toEqual(jasmine.any(Function));
  })

  it('should change task.status to active and call $save', function(){
    $scope.resumeTask(task)
    expect(task.status).toEqual('active')
    expect($scope.taskList.$save).toHaveBeenCalled()
  })

  it('should define destroy on the scope as a function', function(){
    expect($scope.destroy).toBeDefined();
    expect($scope.destroy).toEqual(jasmine.any(Function));
  })

  it('should call taskList.$remove', function(){
    $scope.destroy(task);
    expect($scope.taskList.$remove).toHaveBeenCalled();
  })
})
