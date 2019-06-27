window.onload = function () {
    var role = JSON.parse(sessionStorage.getItem('data'));
    console.log(role);
    //点击事件
    var x = 1;
    var n = 1;
    $('#btn').click(function () {
        var a = n % 2;
        if (a == 1 && x < role.length) {
            $('.img3').css('display', 'none');
            $('.img4').css('display', 'block');
            $('.identity').text(function () {
                return role[x-1];
            });
            $('#btn').text(function () {
                n = n + 1;
                x = x + 1;
                return '隐藏并传递给' + x + '号';
            });
        } else if (a == 0) {
            $('.identity').text("");
            $('.img4').css('display', 'none');
            $('.img3').css('display', 'block');
            $('#btn').text(function () {
                n = n + 1;
                $('.number').text(x);
                return '查看' + x + '号身份';
            });
        } else if (x == role.length) {
            $('.identity').text(function () {
                return role[x-1];
            });
            $('#btn').text(function () {
                x = x + 1;
                return '法官查看';
            });
        } else if (x == (role.length + 1)) {
            window.location.href = 'js3-2.html';
        }
    });
    //点击返回
    $('.img1').click(function(){
        history.back();
    });
}