describe('active task list directive', function(){
  var task= {};
  beforeEach(function(){
    module('chadTools.dashboard.task-list-directive')
    inject(function($controller, $rootScope){
      $scope = $rootScope.$new();
      $scope.taskList = jasmine.createSpyObj('taskList', ['$remove', '$save']);
      spyOn($scope, '$on').and.callThrough();
      $controller('activeTaskListCtrl', {$scope: $scope})
    })
  })

  it('should define formVisible on scope as false', function(){
    expect($scope.formVisible).toBeDefined();
    expect($scope.formVisible).toBeFalsy();
  })

  it('should define order on scope as an object', function(){
    expect($scope.order).toBeDefined();
    expect(_.isObject($scope.order)).toBe(true)
  })

  it('should define toggle filter on scope as a string equal to Everyone', function(){
    expect($scope.toggleFilter).toBeDefined();
    expect($scope.toggleFilter).toEqual('Everyone')
  })

  describe('scope.destroy', function(){
    it('should define destroy on scope as a function', function(){
      expect($scope.destroy).toBeDefined();
      expect($scope.destroy).toEqual(jasmine.any(Function));
    })

    it('should call taslist.$remove when scope.destroy is called', function(){
      $scope.destroy(task);
      expect($scope.taskList.$remove).toHaveBeenCalled();
    })
  })

  describe('scope.start', function(){
    it('should define scope.start on scope as a function', function(){
      expect($scope.start).toBeDefined();
      expect($scope.start).toEqual(jasmine.any(Function))
    })

    it('should asssign task.started at a string, task.status to development and call $save', function(){
      $scope.start(task);
      expect(_.isString(task.started_at)).toBe(true);
      expect(task.status).toEqual('development');
      expect($scope.taskList.$save).toHaveBeenCalled();
    })
  })

  describe('scope.completed', function(){
    it('should be defined on scope as a function', function(){
      expect($scope.completed).toBeDefined();
      expect($scope.completed).toEqual(jasmine.any(Function));
    })

    it('should assign status to completed and call $save', function(){
      $scope.completed(task);
      expect(task.status).toEqual('completed');
      expect($scope.taskList.$save).toHaveBeenCalled();
    })
  })

  describe('scope.markImportant', function(){
    it('should be defined on scope as a function', function(){
      expect($scope.markImportant).toBeDefined();
      expect($scope.markImportant).toEqual(jasmine.any(Function));
    })

    describe('important is undefined', function(){
      beforeEach(function(){
        task.important =undefined;
      })
      it('should assign task.important to true and call $save', function(){
        $scope.markImportant(task);
        expect(task.important).toBeTruthy();
        expect($scope.taskList.$save).toHaveBeenCalled();
      })
    })

    describe('mark important is truthy', function(){
      beforeEach(function(){
        task.important =true;
      })
      it('should assign task.important to false and call $save', function(){
        $scope.markImportant(task);
        expect(task.important).toBeFalsy();
        expect($scope.taskList.$save).toHaveBeenCalled();
      })
    })
  })

  describe('scope.showForm', function(){
    it('should be defined on scope as a function', function(){
      expect($scope.showForm).toBeDefined();
      expect($scope.showForm).toEqual(jasmine.any(Function))
    })

    it('should make showForm true when called', function(){
      $scope.showForm();
      expect($scope.formVisible).toBeTruthy();
    })
  })

  describe('scope.sort', function(){
    it('should be defined on scope as a function', function(){
      expect($scope.sort).toBeDefined();
      expect($scope.sort).toEqual(jasmine.any(Function));
    })
    describe('when called it', function(){
      it('should inverse the value of order.reverse', function(){
        $scope.sort('title');
        expect($scope.order.reverse).toBeTruthy();
      })
      beforeEach(function(){
        $scope.order.by = 'Cheese';
      })
      it('should assign order.by to Cheese, and order.reverse to true', function(){
        $scope.sort('Cheese');
        expect($scope.order.reverse).toBeTruthy();
        expect($scope.order.by).toEqual('Cheese')
      })
    })
  })

  describe('$scope.$on', function(){
    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $rootScope.$broadcast('hideNewTaskForm');
    }))

    it('should be defined on scope as a function', function(){
      expect($scope.$on).toBeDefined();
      expect($scope.$on).toEqual(jasmine.any(Function));
    });

    it('should call $scope.on when hideNewTaskForm is broadcast', function(){
      expect($scope.$on).toHaveBeenCalled();
      expect($scope.formVisible).toBeTruthy();
    });
  })
})
