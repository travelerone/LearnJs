'use strict';
angular.module('admin', ['oc.lazyLoad', 'ui.router','mgcrea.ngStrap'])
    .config(httpConfig)
    .config(projectRouteConfig)
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toParams.page != undefined) {
                toParams.page = toParams.page || 1;
            }
            if (toParams.size != undefined) {
                toParams.size = toParams.size || 10;
            }
        });
    });






function httpConfig($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;chaset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;chaset=utf-8';
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
}