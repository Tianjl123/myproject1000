$.ajax({
					url:"http://localhost/tianhong/json/data.json",
					type:"get",
					success:function(res){
//						console.log(res.top[1].url)
						var str = ""
						for(var i=0;i<res.top.length;i++){
							str+=`<img src="${res.top[i].url}" />`
						}
//						console.log(str)
						$(".top-l").html(str)
						
						var str1 = "";
						for(var i=0;i<res.swiper.length;i++){
							str1+=`<div class="swiper-slide" style="background-image:url(${res.swiper[i].url})"></div>`
						}
//						$(".swiper-wrapper").html(str1)
						
						var more = "";
						for(var i=0;i<res.more.length;i++){
							more+=`<a><img src="${res.more[i].url}" /></a>`
						}
						$(".more").html(more)
						
						var food1 = "";
						for(var i=0;i<res.food1.length;i++){
							food1+=`<li liyang="${res.food1[i].goodsId}">
							<a href="list.html" target="_blank">
										<img src="${res.food1[i].url}"/>
										<p>${res.food1[i].name}</p>
										<i>${res.food1[i].price1}</i>
										<del>${res.food1[i].price2}</del></a>

									</li>`
						}
						$(".food ul").eq(0).html(food1)
						var food2 = "";
						for(var i=0;i<res.food2.length;i++){
							food2+=`<li><a href="list.html" target="_blank">
										<img src="${res.food2[i].url}"/>
										<p>${res.food2[i].name}</p>
										<i>${res.food2[i].price1}</i>
										<del>${res.food2[i].price2}</del></a>
									</li>`
						}
						$(".food ul").eq(1).html(food2)
						var food3 = "";
						for(var i=0;i<res.food3.length;i++){
							food3+=`<li><a href="list.html" target="_blank">
										<img src="${res.food3[i].url}"/>
										<p>${res.food3[i].name}</p>
										<i>${res.food3[i].price1}</i>
										<del>${res.food3[i].price2}</del></a>
									</li>`
						}
						$(".food ul").eq(2).html(food3)
						var food4 = "";
						for(var i=0;i<res.food1.length;i++){
							food4+=`<li><a href="list.html" target="_blank">
										<img src="${res.food4[i].url}"/>
										<p>${res.food4[i].name}</p>
										<i>${res.food4[i].price1}</i>
										<del>${res.food4[i].price2}</del></a>
									</li>`
						}
						$(".food ul").eq(3).html(food4)
						
						var life1 = "";
						for(var i=0;i<res.life1.length;i++){
							life1+=`<li><a href="list.html?${res.life1[i].url}&${res.life1[i].name}" target="_blank">
										<img src="${res.life1[i].url}"/>
										<p>${res.life1[i].name}</p>
										<i>${res.life1[i].price1}</i>
										<del>${res.life1[i].price2}</del></a>
									</li>`
						}
						$(".life ul").eq(0).html(life1)
						var life2 = "";
						for(var i=0;i<res.life2.length;i++){
							life2+=`<li><a href="list.html" target="_blank">
										<img src="${res.life2[i].url}"/>
										<p>${res.life2[i].name}</p>
										<i>${res.life2[i].price1}</i>
										<del>${res.life2[i].price2}</del></a>
									</li>`
						}
						$(".life ul").eq(1).html(life2)
						var life3 = "";
						for(var i=0;i<res.life3.length;i++){
							life3+=`<li><a href="list.html" target="_blank">
										<img src="${res.life3[i].url}"/>
										<p>${res.life3[i].name}</p>
										<i>${res.life3[i].price1}</i>
										<del>${res.life3[i].price2}</del></a>
									</li>`
						}
						$(".life ul").eq(2).html(life3)
						var life4 = "";
						for(var i=0;i<res.life4.length;i++){
							life4+=`<li><a href="list.html" target="_blank">
										<img src="${res.life4[i].url}"/>
										<p>${res.life4[i].name}</p>
										<i>${res.life4[i].price1}</i>
										<del>${res.life4[i].price2}</del></a>
									</li>`
						}
						$(".life ul").eq(3).html(life4)
						
						var eappl1 = "";
						for(var i=0;i<res.eappl1.length;i++){
							eappl1+=`<li><a href="list.html" target="_blank">
										<img src="${res.eappl1[i].url}"/>
										<p>${res.eappl1[i].name}</p>
										<i>${res.eappl1[i].price1}</i>
										<del>${res.eappl1[i].price2}</del></a>
									</li>`
						}
						$(".eappl ul").eq(0).html(eappl1)
						var eappl2 = "";
						for(var i=0;i<res.eappl2.length;i++){
							eappl2+=`<li><a href="list.html" target="_blank">
										<img src="${res.eappl2[i].url}"/>
										<p>${res.eappl2[i].name}</p>
										<i>${res.eappl2[i].price1}</i>
										<del>${res.eappl2[i].price2}</del></a>
									</li>`
						}
						$(".eappl ul").eq(1).html(eappl2)
						var eappl3 = "";
						for(var i=0;i<res.eappl3.length;i++){
							eappl3+=`<li><a href="list.html" target="_blank">
										<img src="${res.eappl3[i].url}"/>
										<p>${res.eappl3[i].name}</p>
										<i>${res.eappl3[i].price1}</i>
										<del>${res.eappl3[i].price2}</del></a>
									</li>`
						}
						$(".eappl ul").eq(2).html(eappl3)
						var eappl4 = "";
						for(var i=0;i<res.eappl4.length;i++){
							eappl4+=`<li><a href="list.html" target="_blank">
										<img src="${res.eappl4[i].url}"/>
										<p>${res.eappl4[i].name}</p>
										<i>${res.eappl4[i].price1}</i>
										<del>${res.eappl4[i].price2}</del></a>
									</li>`
						}
						$(".eappl ul").eq(3).html(eappl4)
						var clothes1 = "";
						for(var i=0;i<res.clothes1.length;i++){
							clothes1+=`<li><a href="list.html" target="_blank">
										<img src="${res.clothes1[i].url}"/>
										<p>${res.clothes1[i].name}</p>
										<i>${res.clothes1[i].price1}</i>
										<del>${res.clothes1[i].price2}</del></a>
									</li>`
						}
						$(".clothes ul").eq(0).html(clothes1)
						var clothes2 = "";
						for(var i=0;i<res.clothes2.length;i++){
							clothes2+=`<li><a href="list.html" target="_blank">
										<img src="${res.clothes2[i].url}"/>
										<p>${res.clothes2[i].name}</p>
										<i>${res.clothes2[i].price1}</i>
										<del>${res.clothes2[i].price2}</del></a>
									</li>`
						}
						$(".clothes ul").eq(1).html(clothes2)
						var clothes3 = "";
						for(var i=0;i<res.clothes3.length;i++){
							clothes3+=`<li><a href="list.html" target="_blank">
										<img src="${res.clothes3[i].url}"/>
										<p>${res.clothes3[i].name}</p>
										<i>${res.clothes3[i].price1}</i>
										<del>${res.clothes3[i].price2}</del></a>
									</li>`
						}
						$(".clothes ul").eq(2).html(clothes3)
						var clothes4 = "";
						for(var i=0;i<res.clothes4.length;i++){
							clothes4+=`<li><a href="list.html" target="_blank">
										<img src="${res.clothes4[i].url}"/>
										<p>${res.clothes4[i].name}</p>
										<i>${res.clothes4[i].price1}</i>
										<del>${res.clothes4[i].price2}</del></a>
									</li>`
						}
						$(".clothes ul").eq(3).html(clothes4)
						
						var skin1 = "";
						for(var i=0;i<res.skin1.length;i++){
							skin1+=`<li><a href="list.html" target="_blank">
										<img src="${res.skin1[i].url}"/>
										<p>${res.skin1[i].name}</p>
										<i>${res.skin1[i].price1}</i>
										<del>${res.skin1[i].price2}</del></a>
									</li>`
						}
						$(".skin ul").eq(0).html(skin1)
						var skin2 = "";
						for(var i=0;i<res.skin2.length;i++){
							skin2+=`<li><a href="list.html" target="_blank">
										<img src="${res.skin2[i].url}"/>
										<p>${res.skin2[i].name}</p>
										<i>${res.skin2[i].price1}</i>
										<del>${res.skin2[i].price2}</del></a>
									</li>`
						}
						$(".skin ul").eq(1).html(skin2)
						var skin3 = "";
						for(var i=0;i<res.skin3.length;i++){
							skin3+=`<li><a href="list.html" target="_blank">
										<img src="${res.skin3[i].url}"/>
										<p>${res.skin3[i].name}</p>
										<i>${res.skin3[i].price1}</i>
										<del>${res.skin3[i].price2}</del></a>
									</li>`
						}
						$(".skin ul").eq(2).html(skin3)
						var skin4 = "";
						for(var i=0;i<res.skin4.length;i++){
							skin4+=`<li><a href="list.html" target="_blank">
										<img src="${res.skin4[i].url}"/>
										<p>${res.skin4[i].name}</p>
										<i>${res.skin4[i].price1}</i>
										<del>${res.skin4[i].price2}</del></a>
									</li>`
						}
						$(".skin ul").eq(3).html(skin4)
						
						var baby1 = "";
						for(var i=0;i<res.baby1.length;i++){
							baby1+=`<li><a href="list.html" target="_blank">
										<img src="${res.baby1[i].url}"/>
										<p>${res.baby1[i].name}</p>
										<i>${res.baby1[i].price1}</i>
										<del>${res.baby1[i].price2}</del></a>
									</li>`
						}
						$(".baby ul").eq(0).html(baby1)
						var baby2 = "";
						for(var i=0;i<res.baby2.length;i++){
							baby2+=`<li><a href="list.html" target="_blank">
										<img src="${res.baby2[i].url}"/>
										<p>${res.baby2[i].name}</p>
										<i>${res.baby2[i].price1}</i>
										<del>${res.baby2[i].price2}</del></a>
									</li>`
						}
						$(".baby ul").eq(1).html(baby2)
						var baby3 = "";
						for(var i=0;i<res.baby3.length;i++){
							baby3+=`<li><a href="list.html" target="_blank">
										<img src="${res.baby3[i].url}"/>
										<p>${res.baby3[i].name}</p>
										<i>${res.baby3[i].price1}</i>
										<del>${res.baby3[i].price2}</del></a>
									</li>`
						}
						$(".baby ul").eq(2).html(baby3)
						var baby4 = "";
						for(var i=0;i<res.baby4.length;i++){
							baby4+=`<li><a href="list.html" target="_blank">
										<img src="${res.baby4[i].url}"/>
										<p>${res.baby4[i].name}</p>
										<i>${res.baby4[i].price1}</i>
										<del>${res.baby4[i].price2}</del></a>
									</li>`
						}
						$(".baby ul").eq(3).html(baby4)
					}
				})