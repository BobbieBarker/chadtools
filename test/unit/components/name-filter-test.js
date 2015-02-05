describe("Name Filter", function(){
  var data;
  var result;

  beforeEach(function(){
    module('name-filter');
    inject(function($filter){
      filter = $filter('nameFilter');
      data = [
          {
            "firstName": "chad",
            "lastName": "king"
          },
        {
          "firstName": "bob",
          "lastName": "king"
        }
      ];
      result = filter(data)
    })
  });


  describe('full name filter', function(){
    it('should be an array of objects', function(){
      expect(angular.isArray(result)).toBe(true);
      expect(angular.isObject(result[0])).toBe(true);
    });

    it('should concatenate a first name and a last name together', function(){
      expect(result[0].fullname).toEqual('chad king');
      expect(result[1].fullname).toEqual('bob king')
    })
  })
})
