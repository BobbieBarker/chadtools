describe('show my task filter', function(){
  var taskList, result, toggleFilter, currentUser;
  beforeEach(function(){
    module('chadTools.dashboard.my-task-filter')
    inject(function($filter){
      filter = $filter('myTasks');
      taskList = [
        {assignee: [{uid: 1}], status: 'development'},
        {assignee: [{uid: 1}], status: 'development'},
        {assignee: [{uid: 2}], status: 'development'},
        {assignee: [{uid: 3}], status: 'development'}
      ];
      toggleFilter = 'Me';
      currentUser = {$id: 1};
      result = filter(taskList, toggleFilter, currentUser);
    })
  })



  describe('my tasks filter with toggleFilter set to me', function(){
    it('should return an array of objects', function(){
      expect(_.isArray(result)).toBe(true);
      expect(_.isObject(result[0])).toBe(true);
    })

    it('should return only objects that match the current user id', function(){
      expect(result.length).toEqual(2);
      expect(_.every(result, function(target){
        return _.every(target.assignee, {'uid': 1})
      })).toBe(true)
    })
  })

  describe('my task filter with toggleFilter set to Everyone', function(){
    beforeEach(function(){
      toggleFilter = 'Everyone'
      result = filter(taskList, toggleFilter, currentUser);
    })
    it('should return all taks', function(){
      expect(result.length).toEqual(4);
    })
  })

})
