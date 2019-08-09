angular.module('admin')
    .factory('pathProject',function(){
        return {
            //获取文章列表地址
            getArticleList_url: '/carrots-admin-ajax/a/article/search',
            //获取单个文章
            getArticle_url: (id)=>`/carrots-admin-ajax/a/article/${id}`,
            //新增文章
            addArticle_url: '/carrots-admin-ajax/a/u/article',
            //编辑文章
            editArticle_url: (id)=>`/carrots-admin-ajax/a/u/article/${id}`,
            //修改文章
            changeArticleStatus_url: `/carrots-admin-ajax/a/u/article/status`,
            //删除文章
            delArticle_url: (id)=>`/carrots-admin-ajax/a/u/article/${id}`,
            //上传图片
            upLoad_url: '/carrots-admin-ajax/a/u/img/task'
        }
    });