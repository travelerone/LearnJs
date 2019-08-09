angular.module("admin")
    .directive('search', function () {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/searchParams/search-params.html',
            replace: true,
            scope: {
                params: '='
            },
            controller: function ($state, commonUtil, $scope) {
                //搜索
                $scope.search = function () {

                    //strat :没有地址选择器时可以删除 将获取的对象拆开传到url里
                    console.log($scope.params.address);
                    if ($scope.params.address) {
                        $scope.params.province = $scope.params.address.province;
                        $scope.params.city = $scope.params.address.city;
                        $scope.params.county = $scope.params.address.district;
                    }
                    //end :没有地址选择器时可以删除 将获取的对象拆开传到url里
                    console.log($state.current.name)
                    $state.go($state.current.name, commonUtil.querySearchParams($scope.params), {reload: true});
                };
                //清空
                $scope.clean = function () {
                    console.log($scope.params.address);
                    angular.forEach($scope.params, function (data, index) {
                        if (index !== 'size') {
                            $scope.params[index] = '';
                        }
                    });
                    $state.go($state.current, commonUtil.querySearchParams($scope.params), {reload: true});

                }
            }
        }
    });