var username = prompt("Username:");
var password = prompt("Password:");
var query = "mode=191&username="+username+"&password="+password+"&a"+(new Date).getTime()+"&producttype=0";

var xmlhttp = new XMLHttpRequest();

var url = "http://172.16.0.1:8090/";

xmlhttp.open("POST","login.xml",true);

xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xmlhttp.send("mode=191&username=14101A0057&password=Nogo4488&a1457518666250&producttype=0");
