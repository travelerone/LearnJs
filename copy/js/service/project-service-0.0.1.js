'use strict';
angular.module('admin')
    .factory('articleManagementService', function ($http, pathProject) {
        return {
            //获取文章列表
            getArticleList: (params) => $http.get(pathProject.getArticleList_url, { params: params }),
            //获取单个文章
            getArticle: (id) => $http.get(pathProject.getArticle_url(id)),
            //新增文章
            addArticle: (params) => $http.post(pathProject.addArticle_url, params),
            //编辑文章
            editArticle: (id, params) => $http.put(pathProject.editArticle_url(id), params),
            //修改文章
            changeArticleStatus: (params) => $http.put(pathProject.changeArticleStatus_url, params),
            //删除文章
            delArticle: (id) => $http.delete(pathProject.delArticle_url(id))
        }
    })