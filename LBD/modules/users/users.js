//路由定义
myApp.config(function($stateProvider){
    //登录
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'modules/users/login.html',
        controller: 'loginController'
    });
    $stateProvider.state('logout', {
        url: '/logout',
        templateUrl: '<h3>Logging out...</h3>',
        controller: 'logoutController'
    });
});

//Factories
myApp.factory('userServices', ['$http', function($http){
    var factoryDefinitions = {
      login: function(loginReq){
          return $http.post('/carrots-admin-ajax/a/login', loginReq)
          .success(function(data){return data;});
      },
      logout: function(logoutReq){
          return $http.post('/carrots-admin-ajax/a/logout', logoutReq)
          .success(function(data){return data;});
      }
    };
    return factoryDefinitions;
}]);

//Controllers
myApp.controller('loginController', 
                 ['$scope',
                  'userServices',
                  '$location',
                  '$rootScope', 
function($scope, userServices, $location, $rootScope){
    var a = new JSON;
        $scope.login = a;
        $scope.doLogin = function(){
            if($scope.login){
                console.log($scope.login);
                userServices.login($scope.login).then(function(result){
                    $scope.data = result;
                    console.log(result.data.code);
                    if (!result.error){
                        window.sessionStorage['userInfo'] = JSON.stringify(result.data);
                        $rootScope.userInfo = JSON.parse(window.sessionStorage['userInfo']);
                        //$location.path('/dashboard');
                    }
                })
            }
        }
    }
]);



































