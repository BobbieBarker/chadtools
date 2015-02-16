describe('task sorting filter', function(){

  beforeEach(function(){
    module('chadTools.dashboard.task-sorting-filter');
    inject(function($filter){
      filter = $filter('sortTask');
      taskList = [
        {assignee: [{fullname: 'alpha'}], title: 'delta', created_at: '2015-01-18T20:28:41.712Z'},
        {assignee: [{fullname: 'bravo'}], title: 'foxtrot', created_at: '2015-01-17T20:28:41.712Z'},
        {assignee: [{fullname: 'charlie'}], title: 'golf', created_at: '2015-01-16T20:28:41.712Z'},
      ];
    })
  })
  describe('returns an ordered array by assignee name', function(){
    beforeEach(function(){
      result = filter(taskList, 'assignee', false);
    });
    it('should return an array of objects', function(){
      expect(_.isArray(result)).toBe(true);
      expect(_.every(result, function(target){
        return _.isObject(target);
      })).toBe(true)
    })
    it('should return an array of objects in the correct Oder', function(){
      expect(result).toEqual(taskList);
    })
    describe('reverses the order when reverse is true', function(){
      beforeEach(function(){
        result = filter(taskList, 'assignee', true);
      })
      it('reverses the order', function(){
        expect(result).toEqual(taskList.reverse());
      })
    })
  })

  describe('returns an array orderedy by title', function(){
    beforeEach(function(){
      result = filter(taskList, 'title', false);
    });
    it('should return an array of objects', function(){
      expect(_.isArray(result)).toBe(true);
      expect(_.every(result, function(target){
        return _.isObject(target);
      })).toBe(true)
    })

    it('should return an array of objects in the correct Oder', function(){
      expect(result).toEqual(taskList);
    })

    describe('reverses the order when reverse is true', function(){
      beforeEach(function(){
        result = filter(taskList, 'title', true);
      })
      it('reverses the order', function(){
        expect(result).toEqual(taskList.reverse());
      })
    })
  })

  describe('returns an array orderedy by title', function(){
    beforeEach(function(){
      result = filter(taskList, 'created_at', false);
    });
    it('should return an array of objects', function(){
      expect(_.isArray(result)).toBe(true);
      expect(_.every(result, function(target){
        return _.isObject(target);
      })).toBe(true)
    })

    it('should return an array of objects in the correct Oder', function(){
      expect(result).toEqual(taskList.reverse());
    })

    describe('reverses the order when reverse is true', function(){
      beforeEach(function(){
        result = filter(taskList, 'created_at', true);
      })
      it('reverses the order', function(){
        expect(result).toEqual(taskList)
      })
    })
  })
})
