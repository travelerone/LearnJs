window.onload = function () {
    var role = JSON.parse(sessionStorage.getItem('data'));
    var allNum = role.length;
    for (var i = 0; i < allNum; i++) {
        var txt = `<label class = "number" for = "numberradio">
        <input type = "radio" name = "role">
            <span class = "identity"></span>
            <p class = "order"></p>
        </label>`;
        $('main').append(txt);
        $('.identity').eq(i).text(function () {
            return role[i];
        });
        $('.order').eq(i).text(function () {
            return i + 1;
        });
        //添加value;
        $('input').eq(i).attr("value", function () {
            return i + 1;
        });
        $('input').eq(i).attr("id", function () {
            return "input" + (i+1);
        });
        $('.number').eq(i).attr("for", function () {
            return "input" + (i+1);
        });
    }
    $('#btn').click(function () {
        var killed = $('input[type = "radio"]:checked').val();
        console.log(killed);
    });
}



