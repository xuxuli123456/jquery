	$("#list-top").load("public1.html #top");
	$("#list-head").load("public1.html #heade");
	$("#list-ban").load("public1.html #ban");
	$("#list-friendship").load("public1.html #friendship");
	$("#list-footer").load("public1.html #footer");
	$("#list-cebian").load("public1.html .publish-ce-ul",function(){
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
	
//  倒计时jquery
	function gettime( t ){
				if(t<10){
				    return	t="0"+t;
				}else{
					return t;
				}
			}	
				
			function daotime(){
				var end = new Date("2017-9-23 00:00:00");
				var now = new Date();
				var t = parseInt( end.getTime()-now.getTime() )/1000;
				var d = parseInt(t/60/60/24);
				var h = parseInt(t/60/60%24);
				var m = parseInt(t/60%60);
				var s = parseInt(t%60);
				return `距结束仅剩<span>${gettime(d)}</span>天<span>${gettime(h)}</span>时<span>${gettime(m)}</span>分<span>${gettime(s)}</span>秒`
			}
			var timego =setInterval(function(){
				$("#timego").html( daotime() )
			},1000)
			
	var str = location.href;
	//console.log(str) http://127.0.0.1:8020/xiangmu/html/list.html?pname=001&cname=class1
	var arr = str.split("?")[1];
	var pname = arr.split("&")[0].split("=")[1];
	var cname = arr.split("&")[1].split("=")[1];
	$(function(){
		$.ajax({
			type:"get",
			url:"../json/shouye.json",
			success:function(res){
				var str = "";
				var ch = res.classfly002;
				for(var i in ch){
					if(cname == i&&pname ==ch[i].bigid){
						str=`<div id="list-shang">
								<div class="list-box">
									<img src="../img/${ch[i].isrc}"/>
									<div class="list-box-l">
										<h3>
										${ch[i].ispan1}
										<span>${ch[i].zhe}</span>
										<span>折起</span>
										</h3>
										<p id="timego">距结束仅剩
											
										</p>
										<span>2.5万人已购买</span>
									</div>
									
								</div>
							</div>
							<div class="list-main-jin">
								<img src="../img/84583e9f60fe9c79_30x30.png"><span>今日必抢</span>
							</div>
							<ul class="list-main-qiang">
								
							</ul>`
							
							
					}
				}
				$("#list-main").append(str);
				var str1= "";
				for(var i in ch){
					if(cname == i&&pname ==ch[i].bigid){
						for(var j in ch[i].list){
							var cn = ch[i].list[j];
							str1 += `<a href="xiangqing.html?aname=${i}&cd=${ch[i].bigid}&smallid=${cn.id}">
								        <li>
											<img class="listing" src="../img/${cn.src}"/>
											<p class="list-main-qnan over">${cn.span1}</p>
											<p class="list-main-qnv">
												<span>￥</span>
												<span>${cn.price1}</span>
												<span>.${cn.price2}</span>
												<span style="text-decoration:line-through;">￥${cn.price3}</span>
												<span>${Number((cn.price1/cn.price3*10).toFixed(1))}折</span>
											</p>
											<div class="list-main-imgc">
												<img src="../img/upload_014ad3e368cee22026c304f46b43ffe2_80x80.png">
											</div>
									   </li>
								    </a>`
						}
						$(".list-main-qiang").html(str1);
					}
				}		
			}
		})
	})
	