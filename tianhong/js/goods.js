define(function(){
			$(".f-r ul").eq(0).css({
				display:"block",
				display:"flex"
			})
			$(".food h3 span").hover(function(){
				$(".f-r ul").eq($(this).index()-1).css({
				display:"block",
				display:"flex"
			}).siblings().hide()
			})
			
			$(".life ul").eq(0).css({
				display:"block",
				display:"flex"
			})
			$(".life h3 span").hover(function(){
				$(".life ul").eq($(this).index()-1).css({
				display:"block",
				display:"flex"
			}).siblings().hide()
			})
			$(".eappl ul").eq(0).css({
				display:"block",
				display:"flex"
			})
			$(".eappl h3 span").hover(function(){
				$(".eappl ul").eq($(this).index()-1).css({
				display:"block",
				display:"flex"
			}).siblings().hide()
			})
			$(".clothes ul").eq(0).css({
				display:"block",
				display:"flex"
			})
			$(".clothes h3 span").hover(function(){
				$(".clothes ul").eq($(this).index()-1).css({
				display:"block",
				display:"flex"
			}).siblings().hide()
			})
			$(".skin ul").eq(0).css({
				display:"block",
				display:"flex"
			})
			$(".skin h3 span").hover(function(){
				$(".skin ul").eq($(this).index()-1).css({
				display:"block",
				display:"flex"
			}).siblings().hide()
			})
			$(".baby ul").eq(0).css({
				display:"block",
				display:"flex"
			})
			$(".baby h3 span").hover(function(){
				$(".baby ul").eq($(this).index()-1).css({
				display:"block",
				display:"flex"
			}).siblings().hide()
			})
})