		$("#btn").click(function(){
			$.ajax({
				url:"http://www.liyangyf.com/ctrl/login.php",
				data:{
					user:$("#user").val(),
					pass:$("#pass").val()
				},
				success:function(res){
					switch(res){
						case "0":
							$("span").html("用户名和密码不不符");break;
						case "1":
							$("span").html("请重新登录");break;
						default:
							$("span").html("登录成功");
							res = JSON.parse(res);
							console.log(res)
					}
				},
				beforeSend:function(){
					$("span").html("<img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537188750789&di=5cb88875c7c08986a7c32acce4606540&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01191d57b4265f0000018c1b95706d.gif'>");
				}
			})
		})