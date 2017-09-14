function ajax(url,fnWin,fnFaild){
	var ajax = null;
	if (window.XMLHttpRequest) {
		ajax = new XMLHttpRequest();
	}else{
		ajax = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajax.open("get",url,true);	
	ajax.send();
	ajax.onreadystatechange = function (){
		if (ajax.readyState==4) {
			if(ajax.status == 200){
				if (fnWin) { //判断该函数是否存在，如果存在，就调用  返回结果
					fnWin(ajax.responseText); 
				}			
			}else{
				if (fnFaild){
					fnFaild();
				}	
			}
		}
	}
}

