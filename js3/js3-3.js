var day = new StateMachine({
    init: 'today',
    transitions: [
        { name: 'todayend', from: 'today', to: 'olddays' },
    ],
    methods: {
        onTodayfinished: function () { console.log('今天结束') },
    }
});
var step = new StateMachine({
    init: 'notstarted',
    transitions: [
        { name: 'clickone', from: 'notstarted', to: 'onefinished' },
        { name: 'clicktwo', from: 'onefinished', to: 'twofinished' },
        { name: 'clickthree', from: 'twofinished', to: 'threefinished' },
        { name: 'clickfour', from: 'threefinished', to: 'notstarted' }
    ],
    methods: {
        onClickone: function () { console.log('完成第一步') },
        onClicktwo: function () { console.log('完成第二步') },
        onClickthree: function () { console.log('完成第三步') },
        onClickfour: function () { console.log('完成第四步') }
    }
});
console.log(step.state);
function toKilling() {
    $('.judge').css('display', 'none');
    $('.killing').css('display', 'block');
    $('body').css('background-color', '#29bde0');
}
function toJudge(){
    $('.killing').css('display', 'none');
    $('.judge').css('display', 'block');
    $('body').css('background-color', '#f0f0f0');
}
$('.to-die').click(function(){
    toJudge();
});
//点击第一步
$('.div1').click(function () {
    if (step.is('notstarted')) {
        toKilling();
        step.clickone();
        $(this).css('background-color', '#83b09a');
    } else {
        console.log('请按顺序操作');
    }
});
$('.div2').click(function () {
    if (step.is('onefinished')) {
        step.clicktwo();
        $(this).css('background-color', '#83b09a');
    } else {
        console.log('请按顺序操作');
    }
});
$('.div3').click(function () {
    if (step.is('twofinished')) {
        step.clickthree();
        $(this).css('background-color', '#83b09a');
    } else {
        console.log('请按顺序操作');
    }
});
$('.div4').click(function () {
    if (step.is('threefinished')) {
        step.clickfour();
        day.todayend();
        console.log(day.state);
        $(this).css('background-color', '#83b09a');
    } else {
        console.log('请按顺序操作');
    }
});
var role = JSON.parse(sessionStorage.getItem('data'));
var allNum = role.length;
for (var i = 0; i < allNum; i++) {
    var txt = `<label for="div1">
        <div class="number">
            <div class="card">
                <p class="alive">水民</p>
                <p class="serial">1号</p>
            </div>
            <input type="radio" name="role" id="div1">
            <div class="knife">
                <img src="../js3/i/knife.png" alt="">
            </div>
        </div>
    </label>`;
    $('.main2').append(txt);
    $('.alive').eq(i).text(function () {
        return role[i];
    });
    $('.serial').eq(i).text(function () {
        return i + 1;
    });
    //添加value;
    $('input').eq(i).attr("value", function () {
        return i + 1;
    });
    $('input').eq(i).attr("id", function () {
        return "input" + (i + 1);
    });
    $('label').eq(i).attr("for", function () {
        return "input" + (i + 1);
    });
}