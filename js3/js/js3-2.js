window.onload = function () {
    var role = JSON.parse(sessionStorage.getItem('data'));
    var allNum = role.length;
    console.log('共'+allNum+'名玩家');
    console.log(role);
    for (var i = 0; i < role.length; i++) {
        var txt = `<label for="div1">
        <div class="number">
            <div class="card">
                <p class="alive"></p>
                <p class="serial"></p>
            </div>
            <input type="radio" name="role" id="div1">
        </div>
    </label>`;
        // console.log(txt);
        $('main').append(txt);
        $('.alive').eq(i).text(function () {
            return role[i];
        });
        $('.serial').eq(i).text(function () {
            return i + 1;
        });
    }
    $('.to-die').click(function(){
        window.location.href = 'js3-3.html';
    });
    $('.img1').click(function(){
        history.back();
    });
}