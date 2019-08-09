/**
 * Created by q on 2016/9/6.
 */
'use strict';
angular.module('admin')
//选择类别
    .controller('articleListCtrl', function ($scope, FileUploader, $state, ArticleManagementService, $rootScope) {
        var vm = this;
        vm.searchParams = $state.params;
        // 时间格式转换
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        //获取列表
        ArticleManagementService.getArticleList(vm.searchParams).then(function (res) {
            if (res.data.code === 0) {
                vm.articleList = res.data.data.articleList;
                vm.total = res.data.data.total;
                console.log(res);
            } else {
                $rootScope.alert(res.data.message);
            }
        });

        // 删除
        vm.delArticle = function (id, index) {
            $rootScope.confirm("是否确认删除", function () {
                // 发送删除请求
                ArticleManagementService.delArticle(id).then(function (res) {
                    if (res.data.code === 0) {
                        vm.articleList.splice(index, 1);
                        $state.go($state.current, {}, {reload: true});
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            })
        };

        // 改变状态
        vm.changeArticleStatus = function (id, status) {
            // 上线
            if (status === 1) {
                $rootScope.operationConfirm("上线后该图片将在轮播banner中展示。", "是否执行上线操作？", function () {
                    // 发送上线请求
                    ArticleManagementService.changeArticleStatus(id, 2).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.alert("上线成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
            // 下线
            else if (status === 2) {
                $rootScope.operationConfirm("下线后该图片将不展示站轮播banner中。", "是否执行下线操作？", function () {
                    // 发送下线请求
                    ArticleManagementService.changeArticleStatus(id, 1).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.alert("下线成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
        };
    });