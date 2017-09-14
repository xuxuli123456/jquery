//banner部分年龄的显示隐藏
$("#shou-banner-age").mouseenter(function(){
		$(".shou-sex-choose").show();		
	})
	$("#shou-banner-age").mouseleave(function(){
		$(".shou-sex-choose").hide();		
	})




//侧边栏js
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
//固定导航栏
$(window).scroll(function(){
					var stp = $(document).scrollTop();
					var natop = $("#banner").offset().top;
				
					if(stp>=natop){
						$("#beibei").css({"position":"fixed",
						"top":"0",
						"display":"block"})
					}else{
						$("#beibei").css("position","static")
					}
				})