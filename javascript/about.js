var query = location.search.substring(1);
query = query.split("?");

var keyValuePairs = query[1].split(/=/);
var r = keyValuePairs[1];
keyValuePairs = query[0].split(/=/);
var u = keyValuePairs[1];

var hmb = document.getElementById("homeb");
var abtb = document.getElementById("aboutb");

hmb.addEventListener("click", ()=>{
    window.location.href = "./main_page.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

abtb.addEventListener("click", ()=>{
    window.location.href = "./about.html" + "?u=" + u.toString() + "?r=" + r.toString();
});