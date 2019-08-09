'use strict';

angular.module('admin')
    .factory('commonUtil', function () {
        // return {
        // querySearchParams: function(params){
        // angular.forEach(params, function(data, index){
        //     if (index.toLowerCase().indexOf('end') != -1 && params[index]) {
        //         var timeString = String(params[index]);
        //         var str = timeString.substring(timeString.length - 1, timeString.length);
        //         if (str != '9') {
        //             params[index] = params[index] + 86400000 - 1;
        //         }
        //     }
        // }) 
        //     }
        // }
        return {
            querySearchParams: function (params) {
                for (var k in params) {
                    if (params[k] instanceof Date) {
                        params[k] = new Date(params[k]).getTime();
                        console.log(params[k]);
                    }
                    // 处理 结束时间 那天末尾
                    if (k.toLowerCase().indexOf('end') != -1 && params[k]) {
                        var timeString = String(params[k]);
                        var str = timeString.substring(timeString.length - 1, timeString.length);
                        if (str != '9') {
                            params[k] = params[k] + 86400000 - 1;
                        }
                    }
                    if (k === 'page') {
                        params[k] = 1;
                    }
                }
                return params;
            }
        }
    })