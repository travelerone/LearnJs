//变回原来的橙色
function resetColor() {
    var box = document.getElementsByClassName('box');
    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = '#ffa500';
    }
}
function setColor() {
    resetColor();
    //取3个随机数
    var box = document.getElementsByClassName('box');
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var result = [];
    var ranNum = 3;
    for (var i = 0; i < ranNum; i++) {
        var ran = Math.floor(Math.random() * (arr.length - i))
        // result.push(arr[ran]);
        // arr[ran] = arr[arr.length - i - 1];
        result.push(arr.splice(arr[ran], 1)[0]);
    }

    var colors = [];
    var diffColors = [];
    //while循环3个颜色
    while (diffColors.length < 3) {
        var color = "#";
        for (var i = 0; i < 3; i++) {
            var n = Math.round((Math.random() * 1));
            if (n < 16) {
                color += "0";
                color += n.toString(16);
            } else {
                color += n.toString(16);
            }
        }
        colors.push(color);
        console.log(colors);
        for (m = 1; m < colors.length; m++) {
            if (colors.indexOf(colors[m] == m)) {
                diffColors.push(colors[m]);
            }
        }
    }
    console.log(diffColors);
    //随机的格子改变随机的颜色
    box[result[0]].style.backgroundColor = diffColors[0];
    box[result[1]].style.backgroundColor = diffColors[1];
    box[result[2]].style.backgroundColor = diffColors[2];
}
var isClick = false;
var t;
function changeColor() {
    if (isClick) {
        console.log('别点啦');
    } else {
        t = setInterval(setColor, 1000);
        isClick = true;
    }
}
function stopColor() {
    clearInterval(t);
    resetColor();
    isClick = false;
}