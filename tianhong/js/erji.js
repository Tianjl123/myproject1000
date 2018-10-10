define(function(){
			$(".list").children("li").mouseover(function(){
				$(this).children("ul").stop().show(100)
			})
			$(".list").children("li").mouseout(function(){
				$(this).children("ul").stop().hide(100)
			})
	})