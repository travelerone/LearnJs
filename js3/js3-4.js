window.onload = function () {
    var role = JSON.parse(sessionStorage.getItem('data'));
    var allNum = role.length;
    for (var i = 0; i < allNum; i++) {
        var txt = `<label>
        <div class="number">
            <div class="card">
                <p class="alive">水民</p>
                <p class="serial">1号</p>
            </div>
            <input type="radio" name="role">
            <div class="knife">
                <img src="../js3/i/knife.png" alt="">
            </div>
        </div>
    </label>`;
        $('.main2').append(txt);
        $('.alive').eq(i).text(function () {
            return role[i];
        });
        $('.serial').eq(i).text(function () {
            return i + 1;
        });
        //添加value;
        $('input').eq(i).attr("value", function () {
            return i + 1;
        });
        $('input').eq(i).attr("id", function () {
            return "input" + (i + 1);
        });
        $('label').eq(i).attr("for", function () {
            return "input" + (i + 1);
        });
    }
    $('#btn').click(function () {
        var killed = $('input[type = "radio"]:checked').val();
        console.log(killed);
    });
}



