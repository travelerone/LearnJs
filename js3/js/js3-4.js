var killerNum = JSON.parse(sessionStorage.getItem('kNum'));//剩余杀手人数
var peopleNum = JSON.parse(sessionStorage.getItem('pNum'));//剩余平民人数
var killedMen = JSON.parse(sessionStorage.getItem('kMen'));//晚上被杀信息
var votedMen = JSON.parse(sessionStorage.getItem('vMen'));//白天被投信息
console.log('剩余杀手数' + killerNum);

//增加对应天数
var dayNum = killedMen.length;
console.log("总共用时" + dayNum + '天');
$('#killer').text(killerNum);
$('#people').text(peopleNum);
if (killerNum == 0) {
    $('.victory').attr('src','./img/people.png');
}
for (var i = 0; i < dayNum; i++) {
    var txt = `<div class="info">
    <p>第<span class="allday"></span>天</p>
    <p>黑夜：<span class="killinginfo"></span></p>
    <p>白天：<span class="votinginfo"></span></p>
</div>`;
    $('main').append(txt);
    $('.allday').eq(i).text(function () {
        return i + 1;
    });
    $('.killinginfo').eq(i).text(function () {
        return killedMen[i];
    });
    $('.votinginfo').eq(i).text(function () {
        return votedMen[i];
    });
}
$('.to-die').click(function () {
    // sessionStorage.clear()
    window.location.href = 'js2.html';
});
$('.home').click(function () {
    // sessionStorage.clear()
    window.location.href = 'js2.html';
});
