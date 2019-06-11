function getAllNum() {
    var allNum = document.getElementById('playerNum').value - 0;
    var killerNum;
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
        default:
            alert('请输入正确的玩家数量。')
    }
    console.log(allNum);
    function func2() {
        return allNum;
    }
    return func2;
}
var allNum = getAllNum()();
console.log(allNum);
function distribute() {
    
}