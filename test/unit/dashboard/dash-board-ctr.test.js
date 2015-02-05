describe('dash board controller', function(){
  var mockFilter, mockUser, mockUserList, mockTaskList, mockBulletinBoard, mockTaskToaster;
  var mockTaskFilter;
  beforeEach(function(){
    mockTaskList = {$watch: jasmine.createSpy()};
    mockUser = {};
    mockUser.$save = jasmine.createSpy();
    module('chadTools.dashboard.controller', function($provide, $filterProvider){
      angular.mock.module('chadTools.dashboard.completed-task-filter')
      //$provide.value('$filter', mockFilter);
      $provide.value('currentUser', mockUser);
      $provide.value('userList', mockUserList);
      $provide.value('taskList', mockTaskList);
      $provide.value('bulletinBoard', mockBulletinBoard);
      $provide.value('taskToaster', mockTaskToaster);
      $provide.value('completedTaskFilter', mockTaskFilter)
      $filterProvider.register('completedTaskFilter', function(completedTaskFilter){
        return jasmine.createSpy();
      })

    })
    //angular.mock.module('completedTaskFilter')
    inject(function($controller, _$filter_){
      $filter = _$filter_
      $scope = {};
      $controller('dashBoardCtrl', {$scope: $scope, $filter: $filter})
    })
  })

  it('should instantiate $scope.switchTasks as a string equal to Active Tasks', function(){
    expect($scope.switchTasks).toBeDefined();
    expect($scope.switchTasks).toEqual('Active Tasks')
  })

  it('should define toggleView on scope as a function', function(){
    expect($scope.toggleView).toBeDefined();
    expect($scope.toggleView).toEqual(jasmine.any(Function));
  })

  if('should assign dashview true, if dashview is undefined and call currentUser$save', function(){
    $scope.toggleView();
    expect(currentUser.dashView).toEqual(true);
    expect(mockUser.$save).toHaveBeenCalled();
  })

  describe('change currentUser.dashView to be initialized as true', function(){
    beforeEach(function(){
      var currentUser = {};
      currentUser.dashView = true;

      it('should assing dashview.false if dashview is true and call currentUser.save', function(){
        $scope.toggleView();
        expect(currentUser.dashView).toEqual(false);
        expect(mockUser.$save).toHaveBeenCalled();
      })
    })
  })

  describe('change currentuser.dashView to be initliazed as false', function(){
    beforeEach(function(){
      var currentuser = {};
      currentUser.dashView = false;

      it('should assign dashview.true is dashview is false and call currentUser', function(){
        $scope.toggleView();
        expect(currentUser.dashView).toEqual(true);
        expect(mockUser.$save).toHaveBeenCalled();
      })
    })
  })

  it('should call the completed task filter', function(){
    expect(($filter)('completedTaskFilter')).toHaveBeenCalled()
  })

  it('should call watch on taskList', function(){
    expect(mockTaskList.$watch).toHaveBeenCalled();
  })
})
