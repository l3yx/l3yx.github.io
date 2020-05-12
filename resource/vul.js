function getcookie(objname){
    var arrstr = document.cookie.split("; ");
    for(var i = 0;i < arrstr.length;i ++){
    var temp = arrstr[i].split("=");
        if(temp[0] == objname) return unescape(temp[1]);
    }    
}

var csrf_token=getcookie("csrf_token");
if(!csrf_token){
    csrf_token=""
}

var xmlhttp;
if (window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
}
else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("POST","/api/user/set_password",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("csrf_token="+csrf_token+"&current=&password=Aa123456&confirm=Aa123456");
