'use strict';

angular.module('admin')
    .directive('sidebar', function(){
        return {
            templateUrl: 'js/directives/ptteng-sidebar/ptteng-sidebar-0.0.1.html',
            restrict: 'E',
            replace: true,
            scope: {},
            controller: function($scope){
                $scope.sideList = [{id: 1, icon: "", parentID: 0, name: "后台管理", menuID: "HTG", 
                nodes: 
                    [{id: 2, icon: "", parentID: 1, name: "模块管理", menuID: "module", url: "field.module"},
                     {id: 3, icon: "", parentID: 1, name: "角色管理", menuID: "role", url: "field.role"},
                     {id: 6, icon: "", parentID: 1, name: "密码修改", menuID: "pwd",url: "field.pwd"},
                     {id: 7, icon: "", parentID: 1, name: "账户管理", menuID: "account", url: "field.manager"}]}, 
                {id: 64, icon: "", parentID: 0, name: "信息管理", menuID: "pareng", 
                nodes: [
                    {id: 65, icon: "", parentID: 64, name: "公司列表", menuID: "",url: "field.companyList"},
                    {id: 66, icon: "", parentID: 64, name: "职位列表", menuID: "ssss", url: "field.positionList"}]}, 
                {id: 67, icon: "", parentID: 0, name: "内容管理", menuID: "", nodes: [{id: 68, icon: "", parentID: 67, name: "Article列表", menuID: "", url: "field.articleList"}]}]
            }
        };
    });