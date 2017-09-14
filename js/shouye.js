	$("#head").load("public1.html #heade");
	$("#friendship").load("public1.html #friendship");
	$("#footer").load("public1.html #footer");
	$("#cebian").load("public1.html .publish-ce-ul",function(){
		$(".shopp-d1").hover(function(){
		$(".publish-ce-shopping").show();
		},function(){
			$(".publish-ce-shopping").hide();
		})
		
		$(".publish-ce-ul li").eq(1).hover(function(){
			$(".publish-ce-shopping2").show();
		},function(){
			$(".publish-ce-shopping2").hide();
		})
		
		$(".publish-ce-ul li").eq(2).hover(function(){		
			$(".publish-ce-shopping3").show();
	
		},function(){
			$(".publish-ce-shopping3").hide();
		})
		
		$(".publish-ce-ul li").eq(3).hover(function(){		
			$(".publish-ce-shopping4").show();
	        $(".publish-ce-shopping4").click(function(){
				$("body").animate({"scrollTop":"0"},1000) 
			})
		},function(){
			$(".publish-ce-shopping4").hide();
		})
	});
	//banner部分年龄的显示隐藏
	$("#shou-banner-age").mouseenter(function(){
			$(".shou-sex-choose").show();		
		})
		$("#shou-banner-age").mouseleave(function(){
			$(".shou-sex-choose").hide();		
		})
	
	
	//轮播图
	var timer = setInterval( autoplay,3000 );
	var index = 0;
	function autoplay(){
		index++;
		if( index == $("#banner-nav-ult li").size() ){
			index = 0;
		}
	    $("#banner-nav-ol li").eq(index).addClass("changecolor").siblings().removeClass("changecolor");
	    $("#banner-nav-ult li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	
	 $("#banner-nav-ol li").mouseenter(function(){
	 	clearInterval( timer );
	 	index = $(this).index()-1;
	 	autoplay();
	 })
	  $("#banner-nav-ol li").mouseleave(function(){
	 	timer = setInterval( autoplay,3000 );
	 })
	
	
	$(function(){
		$.ajax({
			type:"get",
			url:"../json/shouye.json",			
			success:function(res){
				var html="";
			//	console.log(res.classfly001)
				for(var i in res.classfly001){
					var ch = res.classfly001[i];
					html+=`<li>
								<a href="javascript">
									<img src="../img/${ch.src}">
									<i>￥${ch.price}</i>
								    <p>限量<span>${ch.num}</span>件</p>
								</a>
							</li>`
				}
				$("#banner-nav-ulc").append( html )
			}
		})
	})
	
    inde=0;
	$(function(){
		$.ajax({
			type:"get",
			url:"../json/shouye.json",
			success:function(res){								
				var str="";
				for(var i in res.classfly002){		
					console.log(i)
					var ch=res.classfly002[i];							
					str+=`<div class="shou-main-artical">
								<a  class="tebie" href="list.html?pname=${ch.bigid}&cname=${i}" >
								    <div class="artical-div">
							    		<img src="../img/${ch.isrc}"/>
							    		<h3>
							    			<span>${ch.ispan1}</span><br>
							    			<span>${ch.ispan1}</span>
							    		</h3>
							    		<span class="artical-div-span">${ch.zhe}折起
							    		    <i class="fa fa-angle-right"></i>					    		   
							    		</span>
							    	</div>
							    	<ul class="s-ul"></ul>
								</a>
					        </div>`                                  									        
				}
			    $("#article").append(str);		
			    
			    
			    for(var i in res.classfly002){
			    	var html="";
			    	var ch=res.classfly002[i];
                    for(var j = 0;j<4;j++){
                    	var ct = ch.list[j];
						html+=`<li>					    			
					    			<img src="../img/${ct.src}"/>
					    			<p class="artical-div-span-1">
					    				<span>￥</span>
					    				<span>${ct.price1}</span>
					    				<span>.${ct.price2}</span>
					    				<span style="text-decoration:line-through ;">￥${ct.price3}</span>
					    			</p>					    			
					    			<p class="shou-articlep">${ct.span1}</p>
					    		</li>`
				    }	
				    $(".s-ul").eq(inde).html( html )
				    inde++
			    }
			}
		});
	})
	
	$(function(){
		$.ajax({
			type:"get",
			url:"../json/shouye.json",
			success:function(res){
				var str ="";  
				var str1="";
				for(var i in res.classfly003.class1){
				var ch = res.classfly003.class1;
					str+=`<li>
					   <a href="javascript">
					       <img src="../img/${ch[i]}"/>
					   </a>
					</li>`
				};
				for(var j in res.classfly003.class2){
				var cd = res.classfly003.class2;
					str1+=`<li>
					   <a href="javascript">
					       <img src="../img/${cd[j]}"/>
					   </a>
					</li>`
				}
				
				$(".aside-first").html(str);
				$(".aside-second").html(str1);
			}
		})
	})

//右侧今日优选
    $("#shou-aside-ol-1 li").mouseenter(function(){
			var num = $(this).index();
			$("#aside-ul-yun ul").eq(num).show().siblings().hide();
		})
    
//右侧热卖区的效果
    $(function(){									
		$.ajax({
			type:"get",
			url:"../json/shouye.json",
			success:function(res){
				var str = "";
				console.log(res.classfly004)
				for(var i in res.classfly004){
					str+=`<ul class="aside-shou-ul"></ul>`											
				}
				
				$("#aside3").append(str);
				$(".aside-shou-ul").eq(0).addClass("aside-shou-ulxian");
				num1 = 0
				for(var i in res.classfly004){
					var html = "";
					var ch = res.classfly004[i];
					str+=`<ul class="aside-shou-ul"></ul>`;												
					for(var j in res.classfly004[i] ){
						var cd = ch[j]
						html+=`<a href="javascript">
						            <li>
										<img src="../img/${cd.src}">
										<div>
											<p>${cd.sp1} </p>
											<h3>
												<span>￥${cd.h31}</span>
												<span>￥${cd.h3sp}</span>
											</h3>
										</div>
									</li>
								</a>`
					}
					$(".aside-shou-ul").eq(num1).html(html);
					num1++;
				}	
			$("#aside3 ol li").mouseenter(function(){
				var num2 = $(this).index();
				$(".aside-shou-ul").eq(num2).addClass("aside-shou-ulxian")
				                    .siblings().removeClass("aside-shou-ulxian");
			})	
			}
		})
	})
    
//右侧小的轮播图

