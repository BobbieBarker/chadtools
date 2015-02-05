describe('completed task filter', function(){
    var taskList, result;

    beforeEach(function(){
      module('chadTools.dashboard.completed-task-filter');
      inject(function($filter){
        filter = $filter('completedTaskFilter');
        taskList = [
          {started_at: '2015-01-15T20:28:41.712Z', status: 'shipped'},
          {started_at: moment().toISOString(), status: 'development'},
          {started_at: moment().toISOString(), status: 'shipped'}
        ];
        taskList.$save = jasmine.createSpy();
        result = filter(taskList);
      })
    })


    it('should return an array of objects', function(){
      expect(_.isArray(result)).toBe(true);
      expect(_.isObject(result[0])).toBe(true);
    })

    it('should change the status to completed when started at date is older than current date and status is shipped', function(){
      expect(result[0].status).toEqual('completed')
    })

    it('should call tasklist.$save when the task status is shipped and the current date is graeter than the started date', function(){
      expect(taskList.$save).toHaveBeenCalled();
      expect(taskList.$save.calls.count()).toEqual(1)
    })
})
