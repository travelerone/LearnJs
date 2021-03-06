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
        osliderBlock.value = allNum;
    } else {
        document.getElementById('killerNum').innerHTML = '';
        document.getElementById('civilianNum').innerHTML = '';
    }
}
function distribute() {
    var allNum = getAllNum();
    if (allNum >= 4 && allNum <= 18) {
        var role = JSON.stringify(selRandomNum());
        var killerNum = JSON.stringify(getKillerNum());
        // console.log(killerNum);
        sessionStorage.setItem('killer', killerNum);
        sessionStorage.setItem('data', role);
        window.location.href = 'js3-1.html';
        // console.log(selRandomNum());
        // console.log(getKillerNum());
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
        role.push(i);//得到一个总人数的数组
    }
    var totalArray = [], randomArray = [];
    for (var i = 0; i < allNum; i++) {
        totalArray.push(i);
    }
    for (var i = 0; i < killerNum; i++) {//(allNum-i)很重要
        var randomIndex = Math.floor(Math.random() * (allNum - i));
        var selectIndex = totalArray.splice(randomIndex, 1)[0];
        randomArray.push(selectIndex);
    }//随机选取杀手人数为一个数组，另一个数组为剩下的平民数组
    // console.log(randomArray);
    for (var i = 0; i < totalArray.length; i++) {
        role[totalArray[i]] = '平民';//将平民身份给替换数组中的序号
    }
    for (var i = 0; i < randomArray.length; i++) {
        role[randomArray[i]] = '杀手';//将杀手身份替换数组序号
    }
    return role;
}
//滑动条
var oPlayerNum = document.getElementById("playerNum");//玩家总人数
var osliderBlock = document.getElementById("slider");//滑块的值
function moveChange() {// 滑块的值改变，运行这个函数
    oPlayerNum.value = osliderBlock.value;
    //滑块的值改变的话，滑块的值赋值给方框，实现动态变化
    show();
}
function less() {
    oPlayerNum.value--;
    //减的按钮，减掉玩家总人数的值      
    if (oPlayerNum.value < 4) {
        alert("人太少了，再找几个小伙伴来吧");
        oPlayerNum.value = 4;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为6
    }
    else {
        osliderBlock.value = oPlayerNum.value;// 将玩家人数赋值给滑轮的值
        show();
    }
}
function plus() {
    oPlayerNum.value++;
    //加的按钮，减掉玩家总人数的值，上面的值已经相互关联了，所以方框的值改变，滑块的值也会改变 
    if (oPlayerNum.value > 18) {
        alert("人太多了，可以分一批人再开一局");
        oPlayerNum.value = 18;
        //人数超出范围的话，弹出警告框，并且将方框和滑块的值重置为18
    }
    else {
        osliderBlock.value = oPlayerNum.value;// 将玩家人数赋值给滑轮的值
        show()
    }
}
function back() {
    window.location.href = 'https://travelerone.github.io/learngit/task13/task13-2.html';
}