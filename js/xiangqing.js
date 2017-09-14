	$("#xiang-top").load("public1.html #top");
	$("#xiang-head").load("public1.html #heade");
	$("#xiang-ban").load("public1.html #ban");
	$("#xiang-friendship").load("public1.html #friendship");
	$("#xiang-footer").load("public1.html #footer");
	$("#xiang-cebian").load("public1.html .publish-ce-ul",function(){
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
	
//放大镜效果
	$(".xiul ul li").click(function(){
			var index = $(this).index();
			$(this).css("border","2px solid #FF4956")			    		
			       .siblings().css("border","none")
			$(".cent-img-1 img").eq(index).show().siblings().hide();			    		   
		})
	
	   $(".cent-img-1 img").mouseenter(function(){
	   	    var index = $(this).index();
	  	  
	   	    $(".big").show();
	   	    $(".big img").eq(index).show()
	   	                           .siblings().hide();
	   	    $(".mark").show();
	   })
	    $(".cent-img-1").mouseleave(function(){
	   	    $(".big").hide();                  	    
	   	    $(".mark").hide();
	   })
	$(".cent-img-1").mousemove(function(e){
		var e = e||event;
		var x = e.pageX-$(".cent-img-1").offset().left-$(".mark").width()/2;
		var y = e.pageY-$(".cent-img-1").offset().top-$(".mark").height()/2;
		var maxl = $(".cent-img-1").width()-$(".mark").width();
		var maxt = $(".cent-img-1").height()-$(".mark").height();
		x = Math.min( maxl,Math.max(0,x) );
		y = Math.min( maxt,Math.max(0,y) );
		$(".mark").css({"left":x,"top":y});
		
		var bigLeft = $(".big").eq(0).width()/$(".cent-img-1").eq(0).width()*x;
		var bigTop = $(".big").eq(0).height()/$(".cent-img-1").eq(0).height()*y;
		$(".big img").css({"left":-bigLeft,"top":-bigTop})
	}) 
	
