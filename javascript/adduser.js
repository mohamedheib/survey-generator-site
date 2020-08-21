var hmb = document.getElementById("homeb");
var abtb = document.getElementById("aboutb");

var query = location.search.substring(1);
query = query.split("?");



var keyValuePairs = query[2].split(/=/);
var e = keyValuePairs[1];
keyValuePairs = query[3].split(/=/);
var s = keyValuePairs[1];
keyValuePairs = query[1].split(/=/);
var r = keyValuePairs[1];
keyValuePairs = query[0].split(/=/);
var u = keyValuePairs[1];

var username = document.getElementById("username");
var passw = document.getElementById("password");
var isroot = document.getElementById("admin");

var btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    window.location.href = "../php/adduser.php?u=" + u.toString() + "&r=" + r.toString() + "&username=" + username.value.toString()
    + "&password=" + passw.value.toString() + "&admin=" + isroot.value.toString();
});

if(e == '1'){
    var sub = document.getElementById("sub");
    sub.innerText = "UserNmae already taking please select another one";
}else if(s == '1'){
    var sub = document.getElementById("sub");
    sub.innerText = "User added sccessfully :)";
}

hmb.addEventListener("click", ()=>{
    window.location.href = "./main_page.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

abtb.addEventListener("click", ()=>{
    window.location.href = "./about.html" + "?u=" + u.toString() + "?r=" + r.toString();
});