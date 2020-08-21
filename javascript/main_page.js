var creates = document.getElementById(1);
var answers = document.getElementById(2);
var adduserin = document.getElementById("adduserin");
var usergradsin = document.getElementById("usergradsin");
var hmb = document.getElementById("homeb");
var abtb = document.getElementById("aboutb");



var query = location.search.substring(1);
query = query.split("?");

var keyValuePairs = query[1].split(/=/);
var r = keyValuePairs[1];
keyValuePairs = query[0].split(/=/);
var u = keyValuePairs[1];

if (!(r == '1')){
    document.getElementById("adduser").style.display = "none";
    document.getElementById("usergrads").style.display = "none";
}else{
    adduserin.addEventListener("click", ()=>{
        window.location.href = "./Adduser.html" + "?u=" + u.toString() + "?r=" + r.toString() + "?e=-1?s=-1";
    });
    usergradsin.addEventListener("click", ()=>{
        window.location.href = "./users_gra.html" + "?u=" + u.toString() + "?r=" + r.toString();
    });

}

hmb.addEventListener("click", ()=>{
    window.location.href = "./main_page.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

abtb.addEventListener("click", ()=>{
    window.location.href = "./about.html" + "?u=" + u.toString() + "?r=" + r.toString();
});

creates.addEventListener("mousemove", () => {
    creates.childNodes[1].classList.add('imag-darken');
});
creates.addEventListener("mouseout", () => {
    creates.childNodes[1].classList.remove('imag-darken');
});
creates.addEventListener("click", ()=>{
    window.location.href = "./create_survey.html?u=" + u.toString() + "?r=" + r.toString();
});
answers.addEventListener("mousemove", () => {
    answers.childNodes[1].classList.add('imag-darken');
});
answers.addEventListener("mouseout", () => {
    answers.childNodes[1].classList.remove('imag-darken');
});
function getsurveyid() {
    var survey_id = prompt("Please enter survey ID", "(A.K.A 125632)");

    if (survey_id == null || survey_id == "") {
        if (confirm("Are you sure you want to cancel survey!!")) {
            alert("Survey canceled ");
        } else {
            alert("please enter the survey id aging ")
        }
    } else
        // if(localStorage.getItem(survey_id) == null){
        //     alert("Invalid survey ID please make sure that you entered a correct Id ");
        // }
        // else{
            window.location.href = "./answer_survey.html" + "?u=" + u.toString() + "?r=" + r.toString() +
                "?id=" + survey_id.toString();
      //  }

}
answers.addEventListener("click", getsurveyid);
