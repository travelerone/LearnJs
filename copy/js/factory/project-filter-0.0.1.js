'use strict';

angular.module('admin')
    .filter('articleTypeFilter', function () {
        return function (number) {
            switch (number) {
                case 0:
                    return '首页Banner';
                case 1:
                    return '找职位Banner';
                case 2:
                    return '找精英Banner';
                case 3:
                    return '行业大图';
            }
        }
    })
    .filter('articleStatusFilter', function () {
        return function (number) {
            switch (number) {
                case 1:
                    return '草稿';
                case 2:
                    return '上线';
           }
        }
    })
    .filter('articleStatusChangeFilter', function () {
        return function (number) {
            switch (number) {
                case 1:
                    return '上线';
                case 2:
                    return '下线';
           }
        }
    })