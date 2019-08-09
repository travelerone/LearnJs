'use strict';
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
    let _lazyLoad = (loaded) => {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, { serie: true });
        }
    };

    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });

    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('field', {
            url: '',
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm',
            abstract: true,
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/admin/mainController.js',
                    'js/directives/ptteng-user/ptteng-user-0.0.1.js',
                    'js/directives/ptteng-sidebar/ptteng-sidebar-0.0.1.js',
                    'js/directives/searchParams/search-params.js'
                ])
            }
        })
        
        .state('field.dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
        })
        .state('login',{
            url: '/login',
            templateUrl: 'views/admin/login.html',
            controller: 'loginController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/admin/loginController.js')
            }
        })
        .state('field.articleList',{
            url: '/articleList/:page/:size?category&name&createBy&startAt&endAt&type&status',
            templateUrl: 'views/ContentManagement/articleList.html',
            controller: 'articleListController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/ContentManagement/articleList.js')
            }
        })
        .state('field.articleDetail',{
            url: '/articleDetail',
            templateUrl: 'views/ContentManagement/articleDetail.html',
            controller: 'articleDetailController',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad('js/controllers/ContentManagement/articleDetail.js')
            }
        })
}