describe('task Category Filter', function(){
  var taskList;
  beforeEach(function(){
    module('chadTools.dashboard.task-list-filter');
    inject(function($filter){
      filter = $filter('taskCategoryFilter');
      taskList = [
      {product: 'Application', status: 'development'},
      {product: 'Application', status: 'development'},
      {product: 'Application', status: 'development'},
      {product: 'Data Entry', status: 'completed'},
      {product: 'Data Entry', status: 'completed'},
      {product: 'Data Entry', status: 'completed'},
      {product: 'Data Entry', status: 'completed'}
      ];
    })
  })

  describe('returns an array of all application tasks', function(){
    beforeEach(function(){
      result = filter(taskList, 'Application');
    });

    it('should return an array of objects', function(){
      expect(_.isArray(result)).toBe(true);
      expect(_.isObject(result[0])).toBe(true);
    });

    it('should return only tasks with product Application', function(){
      expect(_.every(result, {'product': 'Application'})).toBe(true)
    })
  })

  describe('returns an Array of all Data Entry tasks', function(){
    beforeEach(function(){
      result = filter(taskList, 'Data Entry');
    });

    it('should return an array of objects', function(){
      expect(_.isArray(result)).toBe(true);
      expect(_.isObject(result[0])).toBe(true);
    });

    it('should return only tasks with product Data Entry', function(){
      expect(_.every(result, {'product': 'Data Entry'})).toBe(true)
    })
  })
})
