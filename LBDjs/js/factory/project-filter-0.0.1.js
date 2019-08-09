'use strict';
angular.module('admin')
//公司列表
// 公司行业
    .filter('companyIndustryFilter', function (industry) {
        var a = industry.length;
        return function (param) {
            if (0 <= param < a) {
                return industry[param].name;
            }
            else {
            }
        }
    })
    // 公司融资规模
    .filter('companyFinancingFilter', function (financing) {
        var a = financing.length;
        return function (param) {
            return param >= a || param < 0 ? "?" : financing[param].name;
        }
    })
    // 公司认证状态
    .filter('approvedStatusFilter', function () {
        return function (param) {
            if (param === 0) {
                return "未认证";
            } else if (param === 1) {
                return "已认证";
            }
            else {
                return "?";
            }
        }
    })
    // 操作公司认证状态
    .filter('changeApprovedStatusFilter', function () {
        return function (param) {
            if (param === 0) {
                return "认证";
            } else if (param === 1) {
                return "解除";
            }
            else {
                return "?";
            }
        }
    })
    // 公司冻结状态
    .filter('freezedStatusFilter', function () {
        return function (param) {
            if (param === 0) {
                return "正常";
            } else if (param === 1) {
                return "冻结";
            }
            else {
                return "?";
            }
        }
    })
    // 公司冻结状态
    .filter('changeFreezedStatusFilter', function () {
        return function (param) {
            if (param === 0) {
                return "冻结";
            } else if (param === 1) {
                return "解冻";
            }
            else {
                return "?";
            }
        }
    })

    //职业列表
    // 上架下架转换
    .filter('positionStatusChangeFilter', function () {
        return function (status) {
            if (status == 1) {
                return 0;
            } else {
                return 1;
            }
        }
    })
    // 上架下架过滤
    .filter('positionStatusFilter', function () {
        return function (status) {
            if (status == 1) {
                return "上架";
            } else {
                return "下架";
            }
        }
    })
    //职业主类
    .filter('positionCategoryFilter', function () {
        return function (status) {
            switch (status) {
                case 1:
                    return "产品";
                case 2:
                    return "UI";
                case 3:
                    return "QA";
                case 4:
                    return "Android";
                case 5:
                    return "IOS";
                case 6:
                    return "WEB";
                case 7:
                    return "OP";
                case 8:
                    return "Java";
                case 9:
                    return "NLP";
                case 10:
                    return "DM";
                case 11:
                    return "DL";
            }
        }
    })
    //学历要求
    .filter('positionEducationFilter', function () {
        return function (status) {
            switch (status) {
                case 0:
                    return "大专";
                case 1:
                    return "本科";
                case 2:
                    return "硕士";
                case 3:
                    return "博士";
            }
        }
    })
    //工作经验
    .filter('positionExperienceFilter', function () {
        return function (status) {
            switch (status) {
                case 0:
                    return "应届";
                case 1:
                    return "1~2年";
                case 2:
                    return "3~5年";
                case 3:
                    return "6～9年";
                case 4:
                    return "4-10年及以上";
            }
        }
    })
    //工资
    .filter('positionCompensationFilter', function () {
        return function (status) {
            switch (status) {
                case 0:
                    return "8K以下";
                case 1:
                    return "8~15K";
                case 2:
                    return "16~25K ";
                case 3:
                    return "26K及以上";
            }
        }
    })
    //Article列表
    //Article类型
    .filter('articleTypeFilter', function () {
        return function (status) {
            switch (status) {
                case 0:
                    return "首页Banner";
                case 1:
                    return "找职位Banner";
                case 2:
                    return "找精英Banner";
                case 3:
                    return "行业大图";
            }
        }
    })

    //Article状态
    .filter('articleStatusFilter', function () {
        return function (status) {
            switch (status) {
                case 1:
                    return "草稿 ";
                case 2:
                    return "上线";
            }
        }
    })

    //Article状态操作按钮名字
    .filter('articleStatusChangeFilter', function () {
        return function (status) {
            switch (status) {
                case 1:
                    return "上线 ";
                case 2:
                    return "下线";
            }
        }
    });