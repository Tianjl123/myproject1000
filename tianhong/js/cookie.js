//设置cookie
function setCookie(key,value,n){
	if(n != undefined){
		var d = new Date()
		d.setDate(d.getDate()+n);
//		console.log(d)
		document.cookie = key+"="+ value +";expires="+d;
	}else{
		document.cookie = key+"="+ value;
	}
}
//删除cookie,利用了设置cookie的函数
function removeCookie(key){
	setCookie(key,"",-1)
}
//读取cookie
function getCookie(key){
	var str = document.cookie;
	arr = str.split("; ")
	for(var i=0;i<arr.length;i++){
		if(arr[i].split("=")[0] == key){
			return arr[i].split("=")[1];
		}
	}
	return "";
}
function clearAllCookie() {  
//	console.log(123)
        //获取所有Cookie，并把它变成数组  
        var cookies = document.cookie.split(";");
        console.log(cookies)
        //循环每一个数组项，把expires设置为过去时间，这样很容易地消除了所有Cookie  
        for (var i = 0; i < cookies.length; i++) {  
            var cookie = cookies[i];  
            var eqPos = cookie.indexOf("=");  
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;  
            name = name.replace(/^\s*|\s*$/, "");//清除Cookie里的空格  
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;"  
        }  

    }



