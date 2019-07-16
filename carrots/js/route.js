'use strict';

function projectRouteConfig($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/login');
	$stateProvider
	    .state('field', {
			url: '',
			templateUrl: 'views/main.html',
			abstract: true, // true 表明此状态不能被显性激活，只能被子状态隐性激活
		})
		.state('login', {
			url: '/login',
			templateUrl: 'views/login.html',
			controller: 'loginController'
		})
		.state('field.dashboard',{
			url: '/dashboard',
			templateUrl: 'views/dashboard.html',
		})
		.state('field.articleList', {
			url: '/articleList',
			templateUrl: 'views/articleList.html',
			controller: 'articleList'
		})
		.state('field.articleDetail', {
			url: '/articleDetail',
			templateUrl: 'views/articleDetail.html',
			controller: 'articleDetail'
		})
}

//Article 管理
        //Article列表
        .state('field.articleList', {
            url: '/articleList/:page/:size?category&name&createBy&startAt&endAt&type&status',
            templateUrl: 'views/ContentManagement/articleList.html',
            controller: 'articleListCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/ContentManagement/articleList.js')
            }
        })
        //article新增|编辑
        .state('field.articleDetail', {
            url: '/articleDetail?id',
            templateUrl: 'views/ContentManagement/articleDetail.html',
            controller: 'articleDetailCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/ContentManagement/articleDetail.js')
            }
        })