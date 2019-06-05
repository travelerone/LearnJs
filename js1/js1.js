var N = 9;
//随机选择盒子
function selectBox() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8,];
    var ranNum = N;
    result = [];
    for (var i = 0; i < ranNum; i++) {
        var ran = Math.floor(Math.random() * (arr.length - i))
        result.push(arr.splice(arr[ran], 1)[0]);
    }
}
//随机选择颜色
function selectColors() {
    colors = [];
    while (colors.length < N) {
        var color = '#';
        for (var i = 0; i < 3; i++) {
            var n = Math.floor(Math.random() * 256);
            if (n < 16) {
                color += '0';
                color += n.toString(16);
            }
            else color += n.toString(16);
        }
        colors.push(color);
    }
}
var box = document.getElementsByClassName('box');
//将颜色给盒子
function setColor() {
    for (var i=0; i < N; i++){
        box[result[i]].style.backgroundColor = colors[i];
    }
}
//三个颜色查重
function diffColors() {
    resetColor();
    selectColors();
    if (colors[0] === colors[1] || colors[0] === colors[2] || colors[1] === colors[2]) {
        diffColors();
    } else {
        selectBox();
        setColor();
        console.log(colors);
    }
}
//重置颜色
function resetColor() {
    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = '#ffa500';
    }
}
var isClick = false;
var t;
function changeColor() {
    if (isClick) {
        console.log('别点啦');
    } else {
        t = setInterval(diffColors, 1000);
        isClick = true;
    }
}
function stopColor() {
    clearInterval(t);
    resetColor();
    isClick = false;
}