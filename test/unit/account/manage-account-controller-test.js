describe('manage account controller', function(){
  var accntCtrl, $scope;
  beforeEach(function(){
    module('chadTools.account.controller', function($provide) {
      $provide.value('currentUser', {
          "firstName": "chad",
          "lastName": "king",
          "important": false,
          "team": "Development"
        });
      $provide.value('bulletinBoard',
        [
        {"team": "Development", "title": "Application"},
        {"team": "Data Entry", "title": "Data Entry"}
        ]);
      $provide.value('taskList', [{"title": "asdafsfd"}])
      $provide.value('userList', [
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
        ])
      })
        inject(function($controller){
          $scope = {};
          accntCtrl = $controller('accntCtrl', {$scope: $scope})
        })
    })

      it('should create user in scope', function(){
        expect($scope.user).toBeDefined();
        expect(angular.isObject($scope.user)).toBe(true);
      })

      it('should create bulletin board collection in scope', function(){
        expect($scope.bulletinBoard).toBeDefined();
        expect(angular.isArray($scope.bulletinBoard)).toBe(true);
      })

      it('should create task list collection in scope', function(){
        expect($scope.taskList).toBeDefined();
        expect(angular.isArray($scope.taskList)).toBe(true);
      })

      it('should create user list collection in scope', function(){
        expect($scope.userList).toBeDefined();
        expect(angular.isArray($scope.userList)).toBe(true);
      })

})
