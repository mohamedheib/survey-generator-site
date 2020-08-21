var hmb = document.getElementById("homeb");
var abtb = document.getElementById("aboutb");
var query = location.search.substring(1);
query = query.split("?");
var keyValuePairs = query[1].split(/=/);
var r = keyValuePairs[1];
keyValuePairs = query[0].split(/=/);
var u = keyValuePairs[1];
 keyValuePairs = query[2].split(/=/);
var id = keyValuePairs[1];
keyValuePairs = query[3].split(/=/);
var score = keyValuePairs[1];
keyValuePairs = query[4].split(/=/);
var surveylen = keyValuePairs[1];
var subj = document.getElementById("subj");
subj.innerText = "congratulation you have completed survey #" + id;
var deta = document.getElementById("deat");





if (query[5] == undefined) {
 window.location.href = "../php/save_score.php?u=" + u.toString() + "&r=" + r.toString() + "&s=" + score.toString()
     + "&sid=" + id.toString() + "&slen=" + surveylen.toString();
}
hmb.addEventListener("click", ()=>{
    window.location.href = "./main_page.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

abtb.addEventListener("click", ()=>{
    window.location.href = "./about.html" + "?u=" + u.toString() + "?r=" + r.toString();
});
  deta.innerHTML = "You'r score : " + score + "<br />";


