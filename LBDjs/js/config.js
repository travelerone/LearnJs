'use strict';

angular.module('admin', ['oc.lazyLoad', 'ui.router', 'ngCookies', 'mgcrea.ngStrap', 'angularFileUpload', 'angular-loading-bar', 'ngMessages'])
    .factory('recordCookies', recordCookies)
    .config(httpConfig)
    .config(lazyLoadConfig)
    .config(projectRouteConfig)
    .config(loadingBar)
    .run(function ($rootScope, $templateCache, $modal, $cookies, $state, $location, managerService, roleService) {
        //默认分页参数
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {


            if (toParams.page != undefined) {
                toParams.page = toParams.page || 1;
            }
            if (toParams.size != undefined) {
                toParams.size = toParams.size || 10;
            }
        });

        $rootScope.isLogin = function () {
            return !!$cookies.login;
        };
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (!$rootScope.isLogin() && $location.path() !== "/login") {
                $state.go("login");
                return false;
            }
            if ($rootScope.isLogin() && $location.path() === "/login") {
                $state.go("field.home");
                return false;
            }

        });


        $rootScope.$on('$viewContentLoading', function (event) {
            console.log('视图开始加载');
        });
        $rootScope.$on('$viewContentLoaded', function (event) {
            console.log('视图渲染完毕');
        });

        //alert confirm notify
        $rootScope.alert = function (content, okFn) {
            var modal = $modal({
                html: true,
                show: false,
                templateUrl: 'views/template/ptteng-alert-0.0.1.html',
                controller: function ($scope) {
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn == 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };
        $rootScope.confirm = function (content, okFn, cancelFn) {
            var modal = $modal({
                html: true,
                show: false,
                templateUrl: 'views/template/ptteng-confirm-0.0.1.html',
                controller: function ($scope) {
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn == 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                    $scope.cancel = function ($scope) {
                        typeof cancelFn == 'function' && cancelFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };
        //职业列表-删除确认
        $rootScope.operationConfirm = function (title, content, okFn, cancelFn) {
            var modal = $modal({
                html: true,
                show: false,
                templateUrl: 'views/template/operationConfirm.html',
                controller: function ($scope) {
                    $scope.title = title;
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn == 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                    $scope.cancel = function ($scope) {
                        typeof cancelFn == 'function' && cancelFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };

        // 换肤功能：从本地获取已经存储皮肤
        if (localStorage.cssName) {
            var name = "css/SBAdmin/" + (localStorage.cssName || 'orange') + ".css";
            $("#aaa").attr("href", name)
        }
    });


// Set lazy load module
function lazyLoadConfig($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'angularFileUpload',
                files: [
                    'vendor/angular-file-upload/angular-file-upload.min.js',
                    'js/directives/ptteng-uploadThumb/ptteng-uploadThumb-0.0.1.js'
                ]
            }, {
                name: 'datepicker',
                files: [
                    'js/directives/datepicker/datepicker.css',
                    'js/directives/datepicker/datepicker.js'
                ]
            }, {
                name: 'dndLists',
                files: [
                    'vendor/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js'
                ]
            },
            {
                name: 'page',
                files: [
                    'js/directives/ptteng-paging/pagination.js'
                ]
            },
            {
                name: 'area-selcet',
                files: [
                    "js/directives/area-select/areaConstant.js",
                    "js/directives/area-select/areaSelect.js"
                ]
            },

            //上传文件
            {
                name: 'angularFileUpload',
                files: [
                    'vendor/angular-file-upload/angular-file-upload.min.js',
                    'js/directives/ptteng-uploadThumb/ptteng-uploadThumb-0.0.1.js'
                ]
            },

            //富文本
            {
                name: 'um',
                files: [
                    'vendor/um/umeditor.config.js',
                    'vendor/um/umeditor.min.js',
                    'vendor/um/lang/zh-cn/zh-cn.js',
                    'vendor/um/themes/default/css/umeditor.css'
                ]
            }
        ]
    });
}

// Loader
function loadingBar(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 200;
    cfpLoadingBarProvider.includeSpinner = false;
}


function httpConfig($httpProvider) {
    // Set x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


    // Set up global transformRequest function
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };


}

function recordCookies($cookies) {
    return function (params) {
        var cookie = $cookies.records || '{"managerID":"","moduleID":"","targetID":"","operate":""}';
        cookie = JSON.parse(cookie);

        if (params) {
            var setCookies = {
                managerID: params.managerID || cookie.managerID,
                moduleID: params.moduleID || cookie.moduleID,
                operate: params.operate || cookie.operate,
                roleID: params.roleID || cookie.roleID,
                targetID: +params.targetID || cookie.targetID
            };

            if (params.operate == "POST") {
                delete setCookies.targetID;
            }
            $cookies.records = JSON.stringify(setCookies);
        } else {
            return cookie;
        }

    }
}

