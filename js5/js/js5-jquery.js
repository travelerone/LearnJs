$(function(){	
	$('form').on('submit', function(){
		$.ajax({
			type:"post",
			url:"/carrots-admin-ajax/a/login",
			async:true,
			data: $('#login').serialize(),
			dataType: 'json',
			success: function(data){
				console.log(data);
				if(data.code === 0){
					window.location.href = 'http://dev.admin.carrots.ptteng.com/#/login';
				} else{
					$('#msg').html(data.message);
					setTimeout(function(){
						$('#msg').html('');
					},3000);
				}
			}
		});
		
		return false;
	});
});