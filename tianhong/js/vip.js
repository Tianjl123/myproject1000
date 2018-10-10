			define(function(){	
					$a = location.search.substr(1)
					if($a){
							$(".top-r s").html("欢迎"+$a)
						}else{
							$(".top-r s").html("你好，欢迎来到天虹")
						}
					
					$("nav i").click(function(){
						
						if($a){
							$(location).attr("href","vip.html")
							
						}else{
							alert("请先登录")
							$(location).attr("href","l.html")
						}						
					})
					})