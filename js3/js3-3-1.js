//从之前页面传递数组
var role = JSON.parse(sessionStorage.getItem('data'));
var allNum = role.length;
// console.log(role);

//被杀人和被投人统计
var killedMen = [];
var votedMen = [];
function fun() {
    console.log(killedMen);
    console.log(votedMen);
}

//为游戏流程设置有限状态机
var step = new StateMachine({
    init: 'notstarted',
    transitions: [
        { name: 'clickone', from: 'notstarted', to: 'onefinished' },
        { name: 'clicktwo', from: 'onefinished', to: 'twofinished' },
        { name: 'clickthree', from: 'twofinished', to: 'threefinished' },
        { name: 'clickfour', from: 'threefinished', to: 'notstarted' }
    ],
    methods: {
        // onClickone: function () { console.log('完成第一步') },
        // onClicktwo: function () { console.log('完成第二步') },
        // onClickthree: function () { console.log('完成第三步') },
        // onClickfour: function () { console.log('完成第四步') }
    }
});
// console.log(step.state);

//为所有角色设置有限状态机
var personArr = [];
for (var i = 0; i < allNum; i++) {
    personArr.push(new StateMachine({
        init: 'alive',
        transitions: [
            { name: 'kill', from: 'alive', to: 'dead' }
        ],
        methods: {
            // onKill: function () { console.log('我被杀手杀了') }
        }
    }));
}
// console.log(personArr[0].state);

//转到杀人页面
function toKilling() {
    $('.judge').css('display', 'none');
    $('.killing').css('display', 'block');
    $('body').css('background-color', '#29bde0');
    $('.vod').text('杀手杀人');
    $('.tip1').text('杀手请睁眼，杀手请选择要杀的对象');
    $('.tip2').text('点击下方玩家头像，对被杀的玩家进行标记');
    $('.to-die').css('display', 'block');
    $('.to-vote').css('display', 'none');
}
//转到法官页面
function toJudge() {
    $('.killing').css('display', 'none');
    $('.judge').css('display', 'block');
    $('body').css('background-color', '#f0f0f0');
}
//转到投票页面
function toVoting() {
    $('.judge').css('display', 'none');
    $('.killing').css('display', 'block');
    $('body').css('background-color', '#29bde0');
    $('.vod').text('投票');
    $('.tip1').text('发言讨论结束，大家请投票');
    $('.tip2').text('点击投票数最多的人的头像');
    $('.to-die').css('display', 'none');
    $('.to-vote').css('display', 'block');
}
//增加天数
var n = 0;
var day = n + 1;
function createDay() {
    $('.main').append(function () {
        return `<div class="day">第<span class="day-num"></span>天</div>
    <div class="step">
        <div class="div1">杀手杀人</div>
        <div class="div2">亡灵发表遗言</div>
        <div class="div3">玩家依次发言</div>
        <div class="div4">全民投票</div>
    </div>`;
    });
    //添加id
    $('.step').eq(n).attr("id", function () {
        return "day" + day;
    });
    //添加第几天
    $('.day-num').eq(n).text(function () {
        return day;
    });
    day = day + 1;
    n = n + 1;
}
createDay();

//生成所有角色页面
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

//点击第一步
$('.main').on('click', '.div1', function () {
    // var totalday = $('.day-num').length;
    // console.log(totalday);
    if (step.is('notstarted')) {
        toKilling();
        step.clickone();
        $(this).css('background-color', '#83b09a');
    } else {
        console.log('请按顺序操作');
    }
});
//第二步
$('.main').on('click', '.div2', function () {
    if (step.is('onefinished')) {
        step.clicktwo();
        $(this).css('background-color', '#83b09a');
    } else {
        console.log('请按顺序操作');
    }
});
//第三步
$('.main').on('click', '.div3', function () {
    if (step.is('twofinished')) {
        step.clickthree();
        $(this).css('background-color', '#83b09a');
    } else {
        console.log('请按顺序操作');
    }
});
//第四步
$('.main').on('click', '.div4', function () {
    if (step.is('threefinished')) {
        toVoting();
        step.clickfour();
        $(this).css('background-color', '#83b09a');
        var totalday = $('.day-num').length-1;
        console.log(totalday);
        $('.step').eq(totalday).click(function(){
            alert('请按顺序操作');
        });
        $('.step').eq(totalday).css('display','none');
        $('.day').eq(totalday).click(function(){
            $('.step').eq(totalday).toggle();
        });
    } else {
        console.log('请按顺序操作');
    }
});

//在杀人页面点击杀死
$('.to-die').click(function () {
    var n = $('input[type = "radio"]:checked').val();
    var str = $('input[type = "radio"]:checked').siblings().text();
    var reg = RegExp(/\u6740/);//杀这个字
    var killed = n + '号被杀死了，真实身份是平民';
    if (n) {
        if (reg.test(str)) {
            alert("我是杀手");
        } else if (personArr[n - 1].is('alive')) {
            personArr[n - 1].kill();
            // console.log(killed);
            //在法官台本下面显示信息
            $('.step').last().children('.div1').after(function () {
                return killed;
            });
            killedMen.push(killed);
            //改变为死亡的颜色
            $('.alive').eq(n - 1).css('background-color', '#83b09a');
            toJudge();
        } else {
            alert('我已经死了，不能再杀我了');
        }
    } else {
        alert('请选择一个平民');
    }
});

//在投票页面点击投票
$('.to-vote').click(function () {
    var n = $('input[type = "radio"]:checked').val();
    var str = $('input[type = "radio"]:checked').siblings().text();
    var reg = RegExp(/\u6740/);//杀这个字
    var peopleV = n + '号被投死了，真实身份是平民';
    var killerV = n + '号被投死了，真实身份是杀手';
    if (reg.test(str) && personArr[n - 1].is('alive')) {
        personArr[n - 1].kill();
        //在法官台本下面显示信息
        $('.step').last().children('.div3').after(function () {
            return killerV;
        });
        votedMen.push(killerV);
        //改变为死亡的颜色
        $('.alive').eq(n - 1).css('background-color', '#83b09a');
        toJudge();
        createDay();
    } else if (personArr[n - 1].is('alive')) {
        personArr[n - 1].kill();
        //在法官台本下面显示信息
        $('.step').last().children('.div4').after(function () {
            return peopleV;
        });
        votedMen.push(peopleV);
        //改变为死亡的颜色
        $('.alive').eq(n - 1).css('background-color', '#83b09a');
        toJudge();
        createDay();
    } else {
        alert('我已经死了，不能再杀我了');
    }
});