'use strict'
angular.module('myApp')
    .factory('pathProject', function(){
    	return {
    		//article管理
    		//article列表接口
    		getArticleList_url: '/a/article/serch',
    		//获取单个article
    		getArticle_url: function(id){
    			return '/a/article/'+ id;
    		}
    		//新增article
    		addArticle_url: 'post/a/u/article';
    		//编辑article
    		editArticle_url: function(id){
    			return 'put/a/u/article'+id;
    		}
    		//删除Article
    		delArticle_url: function(id){
    			return 'delete/a/u/article'+id;
    		}
    		//修改article的上架下架
    		changeArticleStatus_url: function(id,status){
    			return '/a/u/article/status?id='+id+'&status='+status;
    		}
    	}
    })
	.factory('path', function() {
		return {
			//login
			login: '/a/login',
			logout: '/a/logout',
			//article
			article: function(aid) {
				if(aid == undefined || aid == "") {
					return '/a/u/article';
				} else {
					return '/a/u/article' + aid;
				}
			}
		}
	})
	.factory('loginServices', ['$http', function($http,path) {
		return {
			login: function(params) {
				return $http.post(path.login, params, {params: params});
			}
			logout: function() {
				return $http.post(path.logout);
			}
		}
	}]);
	.factory('articleManagementServices', function($http, pathProject){
		return {
			//获取
			getArticleList: function(params){
				return $http.get(pathProject.getArticleList_url, {params: params});
			},
			//获取单个article
    		getArticle: function(id){
    			return $http.get(pathProject.getArticle_url(id));
    		},
    		//新增article
    		addArticle: function(params){
    			return $http.post(pathProject.addArticle_url, params);
    		},
    		//编辑article
    		editArticle: function(id,params){
    			return $http.put(pathProject.editArticle_url(id),params);
    		},
    		//删除Article
    		delArticle: function(id){
    			return $http.delete(pathProject.delArticle_url(id));
    		},
    		//修改article的上架下架
    		changeArticleStatus: function(id, status){
    			return $http.put(pathProject.changeArticleStatus(id,status));
    		}
		}
	})