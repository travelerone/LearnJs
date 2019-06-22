window.onload = function () {
    var role = JSON.parse(sessionStorage.getItem('data'));
    console.log(role);
    //点击事件
    var x = 1;
    var n = 1;
    $('#btn').click(function () {
        var a = n % 2;
        if (a == 1 && x < role.length) {
            $('#btn').text(function () {
                n = n + 1;
                x = x + 1;
                return '隐藏并传递给' + x + '号';
            });
        } else if (a == 0) {
            $('#btn').text(function () {
                n = n + 1;
                return '查看' + x + '号身份';
            });
        } else {
            $('#btn').text(function () {
                return '法官查看';
            });
        }
        // $('#spid').text('1');
    });
}