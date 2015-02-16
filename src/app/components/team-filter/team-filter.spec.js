describe('team filter', function(){
  var data;
  var result;
  var resultTwo;
  var resultThree;

  beforeEach(function(){
    module('team-filter');
    inject(function($filter){
      filter = $filter('teamFilter');
      data = [
        {
          "firstName": "chad",
          "lastName": "king",
          "important": false,
          "team": "Development"
        },
        {
          "firstName": "bob",
          "lastName": "king",
          "important": true,
          "team": "Data Entry"
        },
        {
          "firstName": "sponge",
          "lastName": "bob",
          "important": true,
          "team": "Admin"
        }
      ]
      result = filter(data, 'Development', 'Quote Engine');
      resultTwo = filter(data, 'Admin', 'Quote Egine');
      resultThree = filter(data, 'Admin', 'Data Entry')
    })
  });


  describe('team-filter', function(){
    it('should be an array of objects', function(){
      expect(angular.isArray(result)).toBe(true);
      expect(angular.isObject(result[0])).toBe(true);
    })

    it('should return only user objects that match the current Team', function(){
      expect(result.length).toEqual(1);
      expect(result[0]).toEqual(data[0]);
    })

    it('should return all admin and development users when product type is not Data Entry', function(){
      expect(resultTwo.length).toEqual(2);
      expect(_.every(resultTwo, function(target){
       return  target.team === 'Admin' || target.team === 'Development'
      })).toBe(true)
    })

    it('should return all admin and Data Entry users when product type is Data Entry', function(){
      expect(resultThree.length).toEqual(2);
      expect(_.every(resultThree, function(target){
        return _.isEqual(target.team, 'Admin') || _.isEqual(target.team, 'Data Entry')
      })).toBe(true)
    })
  })
})
