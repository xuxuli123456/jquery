$("#head").load("public1.html #header");
$("#friendship").load("public1.html #friendship");
$("#footer").load("public1.html #footer");

	//验证账号
	var  unameflag = null;
	$("#username").blur(function(){
		var str = $(this).val();
		var reg = /^1[3|4|5|8][0-9]\d{8}$/;
		if(!reg.test(str)){
			$("#st3").html("手机号码格式不正确")
			         .css("color","red")
			unameflag = false;
		}else{
			$("#st3").html("ok")
			         .css("color","green")
			unameflag = true;
		}
	})
	//验证框的拖拽效果
	var zhuaitalg = null;
	$("#zhuai1").mousedown(function(e){
		var e = e||event;
		var l = e.offsetX;
		var t = e.offsetY;
		var ol;
		$(document).mousemove(function(e){
			var e = e||event;
			ol = e.pageX-$("#form").offset().left-31;
			if(ol <= 0){
				ol = 0;
			}
			if(ol >= $("#form-bottom").width()-31){
				ol = $("#form-bottom").width()-31;
				$("#form-bottom i").css({"width":$("#form-bottom").width(),
				    "color":"#ffffff"})
				           .html("验证成功");
				$("#zhuai1").html("ok");						
			}
				$("#zhuai1").css("left",ol);
				$("#form-bottom i").css({"width":ol,
				    "background":"#7ac23c"
			   })
			
			$(document).mouseup(function(){
				$(document).off();	
				if(ol < $("#form-bottom").width()-31){
					$("#zhuai1").animate({"left":"0"},300);
					$("#form-bottom i").animate({"width":"0"},300)
					zhuaitalg = false;
				}else{
					zhuaitalg = true;
				}
			})
			
		})
	})
	
	
	function formreturn(){
		if(unameflag&&zhuaitalg){
			return true;
		}else{
			return false;
		}
	}
	
	  
	       
	//登录实现
	$("#btn").click(function(){
		if( formreturn() ){
			$.ajax({
		    	type:"get",
		    	url:"http://datainfo.duapp.com/shopdata/userinfo.php",
		    	data:{
		    		"status":"login",
		    		"userID":$("#username").val(),
		    		"password":$("#psd").val()   		
		    	},
		    	success:function(res){
		    		console.log(res);
		    		switch(res){
		    			case "2" : $("#st2").html("用户名和密码不符").css("color","red") ;break;   			
		                case "0" : $("#st1").html("用户名不存在").css("color","red");break;
		                 default :location.href = "shouye.html";break;
		    		}
		    	}
		    })
		}
		
	})