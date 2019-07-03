var aValue = document.getElementsByTagName('input');
var oMsg = document.getElementById('msg');
var oBtn = document.getElementById('btn');

oBtn.onclick = function(event) {
	event.preventDefault();

	var name = aValue[0].value;
	var pwd = aValue[1].value;
	var data = 'name=' + name + '&pwd=' + pwd;
	console.log(data);
	var xmlhttp;
	if(window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.onreadystatechange = function() {
		var resdata = (xmlhttp.response);
		// 通信成功时，状态值为4
		if(xmlhttp.readyState === 4) {
			if(xmlhttp.status === 200) {
				if(resdata.code === 0) {
					window.open('http://dev.admin.carrots.ptteng.com/#/login', '_self');
				} else {
					oMsg.innerHTML = resdata.message;
					setTimeout(function() {
						oMsg.innerHTML = '';
					}, 5000);
				}
			} else {
				console.error(xhr.statusText);
			}
		}
	};
	xmlhttp.open('POST', '/carrots-admin-ajax/a/login', true);
	xmlhttp.responseType = 'json';
	xmlhttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send(data);
}