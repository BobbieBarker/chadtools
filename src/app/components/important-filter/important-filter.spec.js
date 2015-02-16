describe("Important Filter", function(){
  var data;
  var result;

  beforeEach(function(){
    module('is-important-filter');
    inject(function($filter){
      filter = $filter('starred');
      data = [
        {
          "firstName": "chad",
          "lastName": "king",
          "important": false
        },
        {
          "firstName": "bob",
          "lastName": "king",
          "important": true
        }
      ]
      result = filter(data)
    })
  });


  describe('important filter', function(){
    it('should be an array of objects', function(){
      expect(angular.isArray(result)).toBe(true);
      expect(angular.isObject(result[0])).toBe(true);
    });

    it('should order an array by the important property', function(){
      expect(result).toEqual([
          {
            "firstName": "bob",
            "lastName": "king",
            "important": true
          },
          {
            "firstName": "chad",
            "lastName": "king",
            "important": false
          },
        ])
    })
  })
})
