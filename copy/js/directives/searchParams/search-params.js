angular.module('admin')
    .directive('search', function () {
        return {
            templateUrl: 'js/directives/searchParams/search-params.html',
            replace: true,
            restrict: 'E',
            scope: {
                params: '='
            },
            controller: function ($scope, $state, commonUtil) {
                $scope.search = function () {
                    $state.go($state.current, commonUtil.querySearchParams($scope.params), { reload: true })
                };
                $scope.clean = function () {
                    angular.forEach($scope.params, function(data, index){
                        if (index !== 'size') {
                            $scope.params[index] = '';
                        }
                    })
                    $state.go($state.current, commonUtil.querySearchParams($scope.params), { reload: true })
                }
            }
        }
    });