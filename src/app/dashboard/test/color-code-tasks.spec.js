describe('color coding directive', function(){
  var element, scope;
  beforeEach(function(){
    module('chadTools.dashboard.color-coding', 'my.templates', function($provide){

    })

    inject(function($rootScope, $compile){
      scope = $rootScope.$new()
      scope.task = {status: 'test'};

      element = angular.element('<div color-code-task task="task"></div>');
      element = $compile(element)(scope);
      scope.$digest();
    })
  })

  describe('it should apply the correct class on compile', function(){
    it('should apply the clas task-testing', function(){
      expect(element.hasClass('task-testing')).toBe(true);
      expect(element.hasClass('task-dev')).toBe(false);
      expect(element.hasClass('task-shipped')).toBe(false);
      expect(element.hasClass('task-ship')).toBe(false);
    })
  })

  describe('it should change the class appropriately when status is changed', function(){
    beforeEach(function(){
      scope.task.status = 'development';
      scope.$digest();
    })

    it('should change the class to development', function(){
      expect(element.hasClass('task-dev')).toBe(true);
      expect(element.hasClass('task-testing')).toBe(false);
      expect(element.hasClass('task-shipped')).toBe(false);
      expect(element.hasClass('task-ship')).toBe(false);
    })
  })

  describe('it should change the class to task-shipped when task.status is changed to shipped', function(){
    beforeEach(function(){
      scope.task.status = 'shipped';
      scope.$digest();
    })
    it('should change the class to shipped and remove all other clases', function(){
      expect(element.hasClass('task-shipped')).toBe(true)
      expect(element.hasClass('task-dev')).toBe(false)
      expect(element.hasClass('task-testing')).toBe(false)
      expect(element.hasClass('task-ship')).toBe(false)
    })
  })

  describe('it should change the class to task-ship when task.status is deploy', function(){
    beforeEach(function(){
      scope.task.status = 'deploy';
      scope.$digest();
    })
    it('should have task-ship as the active class and all other classes should be removed.', function(){
      expect(element.hasClass('task-ship')).toBe(true);
      expect(element.hasClass('task-testing')).toBe(false);
      expect(element.hasClass('task-dev')).toBe(false);
      expect(element.hasClass('task-shipped')).toBe(false);
    })
  })
})
