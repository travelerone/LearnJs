'use strict';

angular.module('admin')
    .directive('user', function () {
        return {
            templateUrl: 'js/directives/ptteng-user/ptteng-user-0.0.1.html',
            replace: true,
            restrict: 'E',
            scope: {},
            controller: function($scope,loginService,$state){
                $scope.logout = ()=>{
                    loginService.logout().then((res)=>{
                        if(res.data.code === 0){
                            $state.go('login');
                        } else{
                            console.log(res.data.message);
                        }
                    });
                };
            }
        }
    })