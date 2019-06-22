window.onload= function(){
    var role = JSON.parse(sessionStorage.getItem('data'));
    console.log(role);
    //点击事件
    $('#btn').click(function(){
        $('#spid').text('1');
    });



}