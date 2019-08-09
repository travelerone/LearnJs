angular.module("admin").controller('LoginController', ['$rootScope', '$state', '$cookies', '$timeout', 'loginService', 'managerService', 'recordCookies', LoginController]);

function LoginController($rootScope, $state, $cookies, $timeout, loginService, managerService, recordCookies) {
    var vm = this;

    vm.submit = function () {
        var params = {
            name: vm.name,
            pwd: vm.pwd
        };

        loginService.login(params).then(function (res) {
            if (res.data.code == 0) {
                //cookies存了login
                $cookies.login = "true";
                $state.go("field.dashboard");
                //存了manager.id
                recordCookies({managerID: res.data.data.manager.id, roleID: res.data.data.manager.roleID});
                //localstorage存了res.data.data
                // saveSelfDetail: function (manager) {
                //     localStorage["self"] = JSON.stringify(manager);
    
                // }
                managerService.saveSelfDetail(res.data.data);
            } else {
                vm.errorTip = res.data.message;
                $timeout(function () {
                    vm.errorTip = "";
                }, 3000);
            }
        });

    };

}