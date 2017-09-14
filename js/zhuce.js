//手机号格式验证
var  unameflag = null;
	$("#uname input").blur(function(){
		var str = $(this).val();
		var reg = /^1[3|4|5|8][0-9]\d{8}$/;
		if(!reg.test(str)){
			$("#st1").html("手机号码格式不正确")
			         .css("color","red")
			unameflag = false;
		}else{
			$("#st1").html("ok")
			         .css("color","green")
			unameflag = true;
		}
	})
	//获取随机四位验证码的函数
	function yzm(){
	    var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
	    var str = "";
	    for(var i = 0;i < 4; i++){
	       	str += ""+arr[Math.floor(Math.random()*arr.length)];
	    }
	     return str;
	}
	
	var tuoflag = null;
	$("#zhuai").mousedown(function(e){
		var e = e||event;
		var l = e.offsetX;
		var t = e.offsetY;
		var ol;
		$(document).mousemove(function(e){
			var e = e||event;
			ol = e.pageX-$(".right").offset().left-31;
			if(ol <= 0){
				ol = 0;
			}
			if(ol >= $("#tuo").width()-31){
				ol = $("#tuo").width()-31;
				$("#tuo i").css({"width":$("#tuo").width(),
				    "color":"#ffffff"})
				           .html("验证成功");
				$("#zhuai").html("ok");				
		    }
		    	$("#zhuai").css("left",ol);
				$("#tuo i").css({"width":ol,
				    "background":"#7ac23c"			
			    })
			

			$(document).mouseup(function(){
				$(document).off();	
				if(ol < $("#tuo").width()-31){
					$("#zhuai").animate({"left":"0"},300);
					$("#tuo i").animate({"width":"0"},300);
					tuoflag = false;
				}else{
					tuoflag = true;
				}
			})
			
		})
	})
	
	
	
	//验证码输入框失去焦点 判断输入是否正确
	$("#bta").click(function(){							
		$(this).html(yzm());
	})
	var btaflag = null;
	$("#xin input").blur(function(){
		
	if($("#xin input").val()==$("#bta").html()&&$("#xin input").val()!=""){
			btaflag = true;
		    $("#st2").html("验证码正确")
		             .css("color","green")
		}else{
			btaflag = false;		
			$("#st2").html("验证码错误，请重新输入")
			         .css("color","red");
		}
	})
	//验证密码
	var pswdflag = null;
	$("#pswd input").blur(function(){
		var str = $(this).val();
		var reg = /^\w{6,16}$/;
		if(!reg.test(str)){
			pswdflag = false;
			$("#st3").html("密码格式错误")
			         .css("color","red");
		}else{
			pswdflag = true;
			$("#st3").html("密码格式正确")
			         .css("color","green");
		}							
	})
	
	function formreturn(){
		if(unameflag&&btaflag&&pswdflag&&tuoflag){
			return true							
		}else{
			return false
		}
	}

    //注册
   
	$("#btn").click(function(){
		if(formreturn()){
			$.ajax({
        		type:"get",
        		url:"http://datainfo.duapp.com/shopdata/userinfo.php?", 
        		data : {"status":"register","userID":$("#uname input").val(),"password":$("#pswd input").val()},  
        		success: function(res){
        			switch(res){
        				case "0":alert("用户名重复了");break;
        				case "1":alert("注册成功"); location.href="login.html";break
        				case "2":alert("服务器错误");
        			}
        		}
        	})
		}
    	
    	
    })