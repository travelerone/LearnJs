function getLength(str) {
    return str.replace(/[^\x00-xff]/g, 'xx').length;
}
function findStr(str, n) {
    var tmp = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == n) {
            tmp++
        }
    }
    return tmp;
}
window.onload = function () {
    var aInput = document.getElementsByTagName('input');
    var oName = aInput[0];
    var pwd = aInput[1];
    var pwd2 = aInput[2];
    var aP = document.getElementsByTagName('p');
    var name_msg = aP[0];
    var pwd_msg = aP[1];
    var pwd2_msg = aP[2];
    var count = document.getElementById('count');
    var aEm = document.getElementsByTagName('em');
    var name_length = 0;




    oName.onfocus = function () {
        name_msg.style.display = "block";
        name_msg.innerHTML = '5-25个字符，一个汉字为两个字符，推荐使用中文会员名。'
    }
    oName.onkeyup = function () {
        count.style.visibility = "visible";
        name_length = getLength(this.value);
        count.innerHTML = name_length + '个字符';
        if (name_length == 0) {
            count.style.visibility = 'hidden';
        }
    }
    oName.onblur = function () {
        //含有非法字符，不能为空，长度超过25个字符，少于6个字符
        var re = /[^\w\u4e00-\u9fa5]/g;
        if (re.test(this.value)) {
            name_msg.innerHTML = '含有非法字符！'
        } else if (this.value == '') {
            name_msg.innerHTML = '不能为空！'
        } else if (name_length > 25) {
            name_msg.innerHTML = '长度超过25个字符！'
        } else if (name_length < 6) {
            name_msg.innerHTML = '长度少于6个字符！'
        } else {
            name_msg.innerHTML = 'OK!'
        }
    }



    //密码
    pwd.onfocus = function () {
        pwd_msg.style.display = 'block';
        pwd_msg.innerHTML = '6-16个字符，请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号。'
    }
    pwd.onkeyup = function () {
        //大于5字符中
        if (this.value.length > 5) {
            aEm[1].className = 'active';
            pwd2.removeAttribute("disabled");
            pwd2_msg.style.display = 'block';
        } else {
            aEm[1].className = '';
            pwd2.setAttribute("disabled");
            pwd2_msg.style.display = 'none';
        }


        //大于10字符强
    }
    pwd.onblur = function () {
        var m = findStr(pwd.value, pwd.value[0]);
        var re_n = /[^\d]/g;
        
        //不能为空
        if (this.value == '') {
            pwd_msg.innerHTML = '不能为空';
        }
        //不能用相同字符
        else if (m == this.value.length) {
            pwd_msg.innerHTML = '不能用相同字符';
        }
        //长度应为6-16字符
        else if(this.value.length<6||this.value.length>16){
            pwd_msg.innerHTML = '长度应为6-16字符';
        }
        //不能全为数字
        else if(!re_n.test(this.value)){
            pwd_msg.innerHTML = '不能全为数字';
        }
        //不能全为字母

        //ok


    }
    //确认密码
}