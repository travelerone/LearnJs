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
myApp.factory('loginService', function ($http) {
        return {
            login: function (params) {
                return $http.post('/carrots-admin-ajax/a/login', params);
            }
        }
    });

//Controllers
myApp.controller('loginController', 
                 ['$scope',
                  "loginService",
                  '$location',
                  '$rootScope', 
function($scope,loginService, $location, $rootScope){
        $scope.doLogin = function(){
            $scope.login = {name: $scope.name,
                           pwd: $scope.password}
            if($scope.loginForm.$valid){
                loginService.login($scope.login).then(function(result){
                    $scope.data = result;
                    if(result.data.code === 0){
                        console.log(result);
                        window.sessionStorage['userInfo'] = JSON.stringify(result.data);
                        $rootScope.userInfo = JSON.parse(window.sessionStorage['userInfo']);
                        $location.path('/dashboard');
                    }
                })
            }
        }
    }
]);



































