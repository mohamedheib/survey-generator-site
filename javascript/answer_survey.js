var hmb = document.getElementById("homeb");
var abtb = document.getElementById("aboutb");
var query = location.search.substring(1);
query = query.split("?");


var keyValuePairs = query[1].split(/=/);
var r = keyValuePairs[1];
keyValuePairs = query[0].split(/=/);
var u = keyValuePairs[1];
keyValuePairs = query[2].split(/=/);
var sid = keyValuePairs[1];

var surveyqustions = "";



if (query[3] == undefined){
    window.location.href = "../php/answer_sur.php?u=" + u.toString() + "&r=" + r.toString() + "&sid=" + sid.toString();
}else{
    keyValuePairs = query[3].split(/=/);
    surveyqustions = keyValuePairs[1];
    if (surveyqustions == -1){
        alert("Invalid survey ID please make sure that you entered a correct Id ");
        window.location.href = "./main_page.html?u=" + u.toString() + "?r=" + r.toString();
    }
}

surveyqustions = surveyqustions.replace(/[%]20/g, " ");
surveyqustions = surveyqustions.replace(/@@@/g, "+");


var subject = document.getElementById("subj");
subject.innerText = "Survey ID: " + sid.toString();
hmb.addEventListener("click", ()=>{
    window.location.href = "./main_page.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

abtb.addEventListener("click", ()=>{
    window.location.href = "./about.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

surveyqustions = surveyqustions.split("|*|*|");
var index = surveyqustions.indexOf("");
if (index > -1) {
    surveyqustions.splice(index, 1);
}
shuffleArray(surveyqustions);
var surveylen = surveyqustions.length;


var canswerid;
var cans = "";
var score = 0;
var i = 0;

var qustion = document.getElementById("qustion");
var btn1 = document.getElementById("btn0");
var choise1 = document.getElementById("choice0");
var btn2 = document.getElementById("btn1");
var choise2 = document.getElementById("choice1");
var btn3 = document.getElementById("btn2");
var choise3 = document.getElementById("choice2");
var btn4 = document.getElementById("btn3");
var choise4 = document.getElementById("choice3");
var prog = document.getElementById("progress");

nextqustion(i);
prog.innerText = "Question 1 of " + surveylen;
btn1.addEventListener("click", () => {mycontroler(choise1.innerText.toString());});
btn2.addEventListener("click", () => {mycontroler(choise2.innerText.toString());});
btn3.addEventListener("click", () => {mycontroler(choise3.innerText.toString());});
btn4.addEventListener("click", () => {mycontroler(choise4.innerText.toString());});

function shuffleArray(array) {
    for (var m = array.length - 1; m > 0; m--) {
        var j = Math.floor(Math.random() * (m + 1));
        var temp = array[m];
        array[m] = array[j];
        array[j] = temp;
    }
}

function nextqustion(j) {
     qustion.innerText = surveyqustions[j].toString().split(",|,")[1] + "?";
     var answs = [surveyqustions[j].toString().split(",|,")[2],
         surveyqustions[j].toString().split(",|,")[3],
         surveyqustions[j].toString().split(",|,")[4],
         surveyqustions[j].toString().split(",|,")[5]];
    canswerid = surveyqustions[j].toString().split(",|,")[0].toString().substring(1);
    cans = answs[parseInt(canswerid) - 1];
    shuffleArray(answs);
    const val = "";
    answs = answs.filter(function(x){
        return x !== val;
    });
    choise1.innerText = answs[0];

     if (answs.length < 2)
        btn2.style.display = 'none';
    else
        choise2.innerText = answs[1];

    if (answs.length < 3)
        btn3.style.display = 'none';
    else
        choise3.innerText = answs[2];

    if (answs.length < 4)
         btn4.style.display = 'none';
    else
        choise4.innerText = answs[3];

}

 function mycontroler(bid) {
     if (bid.toString() == cans.toString()) {
         score = score + 1;
     }

     if (i < surveylen -1 ){
         i = i+1;
         btn2.style.display = 'inline';
         btn3.style.display = 'inline';
         btn4.style.display = 'inline';
         prog.innerText = "Question " + i + " of " + surveylen;

         nextqustion(i);

     }
     else{
         score = parseInt(score);
         score = (score/surveylen) * 100;
         score = score.toString().substring(0, 5);
         var path = "./score.html?u=" + u.toString() + "?r=" + r.toString() + "?id=" + sid + "?score=" + score
             + "?surveylen=" + surveylen;
         window.location.href = path;
     }
}