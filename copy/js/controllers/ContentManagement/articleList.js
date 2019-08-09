'use strict';

angular.module('admin')
    .controller('articleListController', function($state, $rootScope,articleManagementService,){
        let vm = this;
        vm.searchParams = $state.params;

        // 时间格式转换
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        articleManagementService.getArticleList(vm.searchParams).then((res)=>{
            if(res.data.code === 0){
                vm.articleList = res.data.data.articleList;
            }
        },()=>{})
    });