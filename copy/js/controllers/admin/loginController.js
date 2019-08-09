angular.module('admin')
    .controller('loginController', ['$state','loginService','$timeout',loginController])
    function loginController($state,loginService,$timeout){
        let vm = this;
        vm.submit = ()=>{
            let params = {
                name: vm.name,
                pwd: vm.pwd
            };
            loginService.login(params).then((res)=>{
                if(res.data.code === 0){
                    $state.go('field.dashboard')
                } else{
                    vm.errorTip = res.data.message;
                    $timeout(()=>{
                        vm.errorTip = "";
                    },3000)
                }
            })
        }
    }