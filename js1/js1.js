function setColor() {

    var box = document.getElementsByClassName('box');
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var result = [];
    var ranNum = 9;
    for (var i = 0; i < ranNum; i++) {
        var ran = Math.floor(Math.random() * (arr.length - i))
        // result.push(arr[ran]);
        // arr[ran] = arr[arr.length - i - 1];
        result.push(arr.splice(arr[ran], 1)[0]);
    }

    var colors = [];
    //while循环3个颜色
    while (colors.length < 3) {
        var color = "#";
        for (var i = 0; i < 3; i++) {
            var n = Math.round((Math.random() * 255));
            if (n < 16) {
                color += "0";
                color += n.toString(16);
            } else {
                color += n.toString(16);
            }
        }
        colors.push(color);
    }

    box[result[0]].style.backgroundColor = colors[0];
    box[result[1]].style.backgroundColor = colors[1];
    box[result[2]].style.backgroundColor = colors[2];
}

function changeColor() { setInterval(function(){setColor()}, 1000);} 