'use strict';
angular.module('admin')
    .factory('path', function(){
        return{
            login: '/carrots-admin-ajax/a/login',
            logout: '/carrots-admin-ajax/a/logout'
        }
    })
    .factory('loginService', function($http, path){
        return {
            login: (params)=>$http.post(path.login, params),
            logout: ()=>$http.post(path.logout)
        }
    })