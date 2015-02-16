describe('new task list form directive', function(){
  var mockDialog, mockToast, taskList, ev, newTaskListFormCtrl;
  var board = {
    "team": "Development",
    "title": "Quote Engine"
  };
  var taskList = [
    {"product": "Quote Engine", "title": "testy Task", "type": "Development"},
    {"product": "Quote Engine", "title": "testy Task", "type": "Development"},
    {"product": "Application", "title": "testy Task", "type": "Development"}
  ];
  taskList.$remove =  jasmine.createSpy();
  var taskListTwo = [
    {"product": "Application", "title": "testy Task", "type": "Development"},
    {"product": "Application", "title": "testy Task", "type": "Development"},
    {"product": "Application", "title": "testy Task", "type": "Development"}
  ];
  taskListTwo.$remove =  jasmine.createSpy();

  beforeEach(function(){
    module('chadTools.account.taskList', 'my.templates', function($provide){
      $provide.value('teamList', [
        {name: 'Development'},
        {name: 'Tech Support'},
        {name: 'Data Entry'},
        {name: 'Admin'}
      ]);
      $provide.value('$mdDialog', mockDialog);
      $provide.value('$mdToast', mockToast);
    })
    inject(function($controller){
      $scope = {};
      $scope.bulletinBoard = jasmine.createSpyObj('bulletinBoard', ['$add', '$remove']);
      bulletinBoard = jasmine.createSpyObj('bulletinBoard', ['$add', '$remove']);
      newTaskListFormCtrl = $controller('newTaskListFormCtrl', {$scope: $scope})
    })
  })

  it('should define teamList in scope as a collection', function(){
    expect($scope.teamList).toBeDefined();
    expect(angular.isArray($scope.teamList)).toBe(true);
    expect(angular.isObject($scope.teamList[0])).toBe(true);
  })

  it('should define addTaskList on scope as a function', function(){
    expect($scope.addTaskList).toBeDefined();
    expect($scope.addTaskList).toEqual(jasmine.any(Function));
  })

  it('should call $add on bulletinBoard when $scope.AddTaskList is called and reinitalize taskList as an object', function(){
    $scope.addTaskList(taskList)
    expect($scope.bulletinBoard.$add).toHaveBeenCalled();
    expect(angular.isObject($scope.taskList)).toBe(true)
  })

  it('should define showAlert on scope as a function', function(){
    expect($scope.showAlert).toBeDefined();
    expect($scope.showAlert).toEqual(jasmine.any(Function));
  })

  it('should define perform delete as a function', function(){
    expect(newTaskListFormCtrl.performDelete).toBeDefined();
    expect(newTaskListFormCtrl.performDelete).toEqual(jasmine.any(Function))
  })

  it('should call taskList.$remove twice', function(){
    newTaskListFormCtrl.performDelete(taskList, bulletinBoard, board)
    expect(taskList.$remove).toHaveBeenCalled();
    expect(taskList.$remove.calls.count()).toEqual(2);
    expect(bulletinBoard.$remove).toHaveBeenCalled();
    expect(bulletinBoard.$remove.calls.count()).toEqual(1);
  })

  it('should not call taskList.$remove', function(){
    newTaskListFormCtrl.performDelete(taskListTwo, bulletinBoard, board);
    expect(taskListTwo.$remove).not.toHaveBeenCalled();
    expect(bulletinBoard.$remove).toHaveBeenCalled();
    expect(bulletinBoard.$remove.calls.count()).toEqual(1);
  })
})
