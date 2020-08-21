var hmb = document.getElementById("homeb");
var abtb = document.getElementById("aboutb");
var query = location.search.substring(1);
query = query.split("?");
var keyValuePairs = query[1].split(/=/);
var r = keyValuePairs[1];
keyValuePairs = query[0].split(/=/);
var u = keyValuePairs[1];
var scores = "";
var tbody = "";

    hmb.addEventListener("click", ()=>{
    window.location.href = "./main_page.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

abtb.addEventListener("click", ()=>{
    window.location.href = "./about.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

if (query[2] == undefined){
    window.location.href = "../php/users_gra.php?u=" + u.toString() + "&r=" + r.toString();
}else {
    keyValuePairs = query[2].split(/=/);
    scores = keyValuePairs[1].split(")(");
    tbody = document.getElementById("tbodyt");
}

for (var i = 0; i < scores.length - 1; i++) {
    var row = document.createElement("tr");
    var linei = scores[i];
    linei = linei.toString().replace(/[%]20/g, " ");
    linei = linei.split(" ");
    for (var j = 0; j < 5; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(linei[j]);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}