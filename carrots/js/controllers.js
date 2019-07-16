'use strict'
angular.module('myApp')
.controller('loginController', ['$scope', '$rootScope', 'loginServices', '$location','$state',
	function($scope, $rootScope, loginServices, $location, $state) {
		$scope.name = 'admin';
		$scope.pwd = 123456;
		$scope.doLogin = function() {
			if($scope.loginForm.$valid) {
				$scope.login = {
					name: $scope.name,
					pwd: $scope.pwd
				};
				loginServices.login($scope.login).then(function(result) {
					$scope.data = result;
					if(result.data.code === 0) {
						console.log(result);
						window.sessionStorage['userInfo'] = JSON.stringify(result.data);
						$rootScope.userInfo = JSON.parse(window.sessionStorage['userInfo']);
						$state.go('field.dashboard');
					}
				})
			}
		}
	}
]);
