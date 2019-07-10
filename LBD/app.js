'use strict';
var myApp = angular.module('myApp', [
    'ui.router'
]);

//config?run?
myApp.config(function($urlRouterProvider, $httpProvider){
    //判断用户是否登录
    if(!window.sessionStorage['userInfo']){
        $urlRouterProvider.otherwise('/login');
    } else {
        $urlRouterProvider.otherwise('/dashboard')
    }
});