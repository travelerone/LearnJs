window.onload = function () {
    var role = JSON.parse(sessionStorage.getItem('data'));
    var allNum = role.length;
    console.log(allNum);
    for (var i = 0; i < role.length; i++) {
        var txt = `<div>
            <p class = "identity"></p>
            <p class = "order"></p>
        </div>`;
        console.log(txt);
        $('main').append(txt);
        $('.identity').eq(i).text(function () {
            return role[i];
        });
        $('.order').eq(i).text(function () {
            return i + 1;
        });
    }
}
function startBtn() {
    window.location.href = 'js3-3.html';
}