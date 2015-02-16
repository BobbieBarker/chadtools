describe('task count filter', function(){
  var taskList, team, countType, result;
  beforeEach(function(){
    module('chadTools.dashboard.task-count-filter')
    inject(function($filter){
      filter = $filter('taskCount');
      taskList = [
      {product: 'Application', status: 'development'},
      {product: 'Application', status: 'development'},
      {product: 'Application', status: 'development'},
      {product: 'Data Entry', status: 'completed'},
      {product: 'Data Entry', status: 'completed'},
      {product: 'Data Entry', status: 'completed'},
      {product: 'Data Entry', status: 'completed'}
      ];
    });
  });


    describe('task count filter team Development', function(){
      beforeEach(function(){
        team = 'Development';
      })

    describe('task count filter team Development, count Type Undefined', function(){
      beforeEach(function(){
        countType = undefined;
        result = filter(taskList, team, countType);
      })
      it('should return a number', function(){
        expect(result).toEqual(jasmine.any(Number));
      });
    })

    describe('task count filter team Development countType active', function(){
      beforeEach(function(){
        countType = 'active';
        result = filter(taskList, team, countType);
      })
      it('should return a number', function(){
        expect(result).toEqual(jasmine.any(Number));
      })
    })

    describe('task count filter team Development countType completed', function(){
      beforeEach(function(){
        countType = 'completed';
        result = filter(taskList, team, countType);
      })
      it('should return a number', function(){
        expect(result).toEqual(jasmine.any(Number));
      })
    })
  })

    describe('task count filter team Data Entry', function(){
      beforeEach(function(){
        team = 'Data Entry';
      })

      describe('task count filter countType active', function(){
        beforeEach(function(){
          countType = undefined;
          result = filter(taskList, team, countType);
        })
        it('should return a number', function(){
          expect(result).toEqual(jasmine.any(Number));
        })
      })

      describe('task count filter countType active', function(){
        beforeEach(function(){
          countType = 'active';
          result = filter(taskList, team, countType);
        })
        it('should return a number', function(){
          expect(result).toEqual(jasmine.any(Number));
        })
      })

      describe('task count filter countType completed', function(){
        beforeEach(function(){
          countType = 'completed';
          result = filter(taskList, team, countType);
        })
        it('should return a number', function(){
          expect(result).toEqual(jasmine.any(Number));
        })
      })
    })

    describe('task count filter team Admin', function(){
      beforeEach(function(){
        team = 'Admin';
      })

      describe('task count filter countType undefined', function(){
        beforeEach(function(){
          countType = undefined;
          result = filter(taskList, team, countType);
        })
        it('should return a number', function(){
          expect(result).toEqual(jasmine.any(Number));
        })
      })

      describe('task count filter countType active', function(){
        beforeEach(function(){
          countType = 'active';
          result = filter(taskList, team, countType);
        })
        it('should return a number', function(){
          expect(result).toEqual(jasmine.any(Number));
        })
      })

      describe('task count filter countType completed', function(){
        beforeEach(function(){
          countType = 'completed';
          result = filter(taskList, team, countType);
        })
        it('should return a number', function(){
          expect(result).toEqual(jasmine.any(Number));
        })
      })
    })
})
