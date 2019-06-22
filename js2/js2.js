function distribute() {
    var allNum = document.getElementById('playerNum').value - 0;
    var killerNum;
    var civilianNum;
    switch (allNum) {
        case 4:
        case 5:
            killerNum = 1;
            break;
        case 6:
        case 7:
        case 8:
            killerNum = 2;
            break;
        case 9:
        case 10:
        case 11:
            killerNum = 3;
            break;
        case 12:
        case 13:
        case 14:
        case 15:
            killerNum = 4;
            break;
        case 16:
        case 17:
        case 18:
            killerNum = 5;
            break;
    }
    civilianNum = allNum - killerNum;
    if (killerNum) {
        document.getElementById('killerNum').innerHTML = killerNum;
        document.getElementById('civilianNum').innerHTML = civilianNum;
    } else {
        document.getElementById('killerNum').innerHTML = '';
        document.getElementById('civilianNum').innerHTML = '';
    }

}
function getAllNum() {
    var allNum = document.getElementById('playerNum').value - 0;
    if (allNum >= 4 && allNum <= 18) {
        window.location.href = '../js3/js3.html';
    } else {
        alert('请输入正确的玩家数量。')
    }
}
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) { // 按 enter
        getAllNum()
    }
};