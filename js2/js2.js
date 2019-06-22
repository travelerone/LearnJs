//取得总人数的值
function getAllNum() {
    var a = document.getElementById('playerNum').value - 0;
    return a;
}
//取得杀手的值
function getKillerNum() {
    var allNum = getAllNum();
    switch (allNum) {
        case 4:
        case 5:
            return 1
        case 6:
        case 7:
        case 8:
            return 2;
        case 9:
        case 10:
        case 11:
            return 3;
        case 12:
        case 13:
        case 14:
        case 15:
            return 4;
        case 16:
        case 17:
        case 18:
            return 5;
    }
}
//实时显示人数
function show() {
    var killerNum = getKillerNum();
    var allNum = getAllNum();
    var civilianNum = allNum - killerNum;
    if (killerNum) {
        document.getElementById('killerNum').innerHTML = killerNum;
        document.getElementById('civilianNum').innerHTML = civilianNum;
    } else {
        document.getElementById('killerNum').innerHTML = '';
        document.getElementById('civilianNum').innerHTML = '';
    }
}
function distribute() {
    var allNum = getAllNum();
    if (allNum >= 4 && allNum <= 18) {
        var role = JSON.stringify(selRandomNum());
        sessionStorage.setItem('data', role);
        window.location.href = '../js3/js3-1.html';
    } else {
        alert('请输入正确的玩家数量。')
    }
}
document.onkeydown = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 13) { // 按 enter
        distribute();
    }
};
var selRandomNum = function () {
    var allNum = getAllNum();
    var killerNum = getKillerNum();
    var role = [];
    for (var i = 0; i < allNum; i++) {
        role.push(i);
    }
    var totalArray = [], randomArray = [];
    for (var i = 0; i < allNum; i++) {
        totalArray.push(i);
    }
    for (var i = 0; i < killerNum; i++) {
        var randomIndex = Math.floor(Math.random() * allNum);
        var selectIndex = totalArray.splice(randomIndex, 1)[0];
        randomArray.push(selectIndex);
    }
    for (var i = 0; i < totalArray.length; i++) {
        role[totalArray[i]] = '平民';
    }
    for (var i = 0; i < randomArray.length; i++) {
        role[randomArray[i]] = '杀手';
    }
    return role;
}
