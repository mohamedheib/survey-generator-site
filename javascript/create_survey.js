var addq = document.getElementById("addq");
var finsh = document.getElementById("finsh");
var adda = document.getElementById("adda");
var A1 = document.getElementById("A1");
var A2 = document.getElementById("A2");
var A3 = document.getElementById("A3");
var A4 = document.getElementById("A4");
var num_ans = 0;
var survey_id;
var hmb = document.getElementById("homeb");
var abtb = document.getElementById("aboutb");

var query = location.search.substring(1);
query = query.split("?");

var keyValuePairs = query[1].split(/=/);
var r = keyValuePairs[1];
keyValuePairs = query[0].split(/=/);
var u = keyValuePairs[1];
if (!(query[2] == undefined)){
    var keyValuePairs = query[2].split(/=/);
    survey_id = keyValuePairs[1];
    alert("you survey has been saved and it now accessible by entering this ID: " + survey_id.toString());
    window.location.href = "./main_page.html?u=" + u.toString() + "?r=" + r.toString();

}



hmb.addEventListener("click", ()=>{
    window.location.href = "./main_page.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

abtb.addEventListener("click", ()=>{
    window.location.href = "./about.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

var x = 0;
var i;
var survey = "";

A2.style.display = "none";
A3.style.display = "none";
A4.style.display = "none";
var ans = [A1,A2,A3,A4];

adda.addEventListener("click", ()=> {
    num_ans = num_ans + 1;
    if (num_ans >= 4){
        num_ans = num_ans - 1;
        alert("total numbers of answers can't be more than 4");
    }
    ans[num_ans].style.display = 'flex';

});

addq.addEventListener("click", ()=> {
    var qustion = document.getElementById("qustion1");
    var answer1 = document.getElementById("answer11");
    var answer2 = document.getElementById("answer22");
    var answer3 = document.getElementById("answer33");
    var answer4 = document.getElementById("answer44");

    if (num_ans == 2){
        answer4.value = "";
    }
    if (num_ans == 1){
        answer3.value = "";
        answer4.value = "";
    }
    if (num_ans  == 0){
        answer2.value = "";
        answer3.value = "";
        answer4.value = "";
    }
    var canswer = document.getElementById("canswer1");
    var a = parseInt(canswer.value);
    if(canswer.value == null || canswer.value == "" || isNaN(a) || a > (num_ans +1) ||
        a < 1){
        var val = num_ans +1;
        alert("correct answer ID should be in range 1-" + val);
        return;
    }
    x = x+1;
    survey = survey.concat("|*|*|{" + canswer.value.toString() + ",|," + qustion.value.toString() + ",|,"
        + answer1.value.toString() + ",|," + answer2.value.toString() + ",|," + answer3.value.toString() + ",|," + answer4.value.toString() +
        ",|,} ");
    if (window.confirm("you have added " + x.toString() + " qustions are you sure you want to add more")){
        qustion.value = "";
        answer1.value = "";
        answer2.value = "";
        answer3.value = "";
        answer4.value = "";
        canswer.value = "";
        num_ans = 0;
        A2.style.display = "none";
        A3.style.display = "none";
        A4.style.display = "none";
    }
    else
        x = x-1;
});



finsh.addEventListener("click", () => {
    var qustion = document.getElementById("qustion1");
    var answer1 = document.getElementById("answer11");
    var answer2 = document.getElementById("answer22");
    var answer3 = document.getElementById("answer33");
    var answer4 = document.getElementById("answer44");

    if (num_ans == 2){
        answer4.value = "";
    }
    if (num_ans == 1){
        answer3.value = "";
        answer4.value = "";
    }
    if (num_ans  == 0){
        answer2.value = "";
        answer3.value = "";
        answer4.value = "";
    }
    var canswer = document.getElementById("canswer1");

    var a = parseInt(canswer.value);
    if(canswer.value == null || canswer.value == "" || isNaN(a) || a > (num_ans +1) ||
        a < 1){
        var val = num_ans +1;
        alert("correct answer ID should be in range 1-" + val);
        return;
    }
    x = x+1;
    survey = survey.concat("|*|*|{" + canswer.value.toString() + ",|," + qustion.value.toString() + ",|,"
        + answer1.value.toString() + ",|," + answer2.value.toString() + ",|," + answer3.value.toString() + ",|," + answer4.value.toString() +
        ",|,} ");

    if (window.confirm("you have added " + x.toString() + " qustions are you sure you want to save the survey")){
        survey = survey.replace(/[?]/g, '');
        survey = survey.replace(/[+]/g, "@@@");
        window.location.href = "../php/creat_sur.php?u=" + u.toString() + "&r=" + r.toString() + "&sur=" + survey.toString();
    }
    else
        x = x-1;
});