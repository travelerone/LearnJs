window.onload = function () {
    //玩家角色数组
    var role = JSON.parse(sessionStorage.getItem('data'));
    console.log(role);
    //点击事件
    var x = 1;//玩家序号
    var n = 1;
    $('#btn').click(function () {
        //取余
        var a = n % 2;
        //是奇数
        if (a == 1 && x < role.length) {
            //显示隐藏不同图标
            $('.img3').css('display', 'none');
            $('.img4').css('display', 'block');
            //显示当前玩家是杀手还是平民
            $('.identity').text(function () {
                return x +'号玩家'+ '是'+ role[x-1];
            });
            //按钮文字变化
            $('#btn').text(function () {
                n = n + 1;
                x = x + 1;
                return '隐藏并传递给' + x + '号';
            });
        } else if (a == 0) {//是偶数时
            $('.identity').text("");//隐藏角色
            $('.img4').css('display', 'none');
            $('.img3').css('display', 'block');
            $('#btn').text(function () {
                n = n + 1;
                $('.number').text(x);
                return '查看' + x + '号身份';
            });
        } else if (x == role.length) {//到最后一位玩家时
            $('.identity').text(function () {
            	$('.img3').css('display', 'none');
                $('.img4').css('display', 'block');
                return x +'号玩家'+ '是'+ role[x-1];
            });
            $('#btn').text(function () {
                x = x + 1;
                return '法官查看';
            });
        } else if (x == (role.length + 1)) {//再次点击跳转
            window.location.href = 'js3-2.html';
        }
    });
    //点击返回
    $('.img1').click(function(){
        history.back();
    });
}