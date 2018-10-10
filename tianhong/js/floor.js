	define(function(){
			$(".floor").hide()
			onscroll=function(){
				if($("html").scrollTop()>1000){
					$(".floor").show()
				}else{
					$(".floor").hide()
				}
			}
			$(".floor li").click(function(){
						$("html").stop().animate({
							scrollTop:$("main").children("div").eq($(this).index()).offset().top
						})
					})
	})