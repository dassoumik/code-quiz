//Assignment Statements
var startBt = document.querySelector("#start");
var remvCols = document.getElementsByClassName("removeOnStart");
var dispQuiz = document.querySelector("#displayRow");
var dispTimer = document.querySelector("#timer");
var teamName = document.createElement("input");
teamName.setAttribute("type", "text");
teamName.setAttribute("class", "inputDisp rounded mt-5 mr-1 pt-2");
var teamLabel = document.createElement("label");
teamLabel.textContent = "Team Name";
teamLabel.setAttribute("class", "textSize mr-3");
var scoreBt = document.createElement("button");
scoreBt.textContent = "Display Score";
scoreBt.setAttribute("class", "btn btn-primary btn-lg");
var breakLine1 = document.createElement("br");
var divInputDisp = document.createElement("div");
divInputDisp.classList.add("col-lg-12");
var divScoreBt = document.createElement("div");
divScoreBt.classList.add("col-lg-12");




var count = 2;
var isWrong = false;
var quizTimer;

//Functions
function startQuiz() {
    remvCols[0].classList.add("hide");
    remvCols[1].classList.add("hide");
    remvCols[2].classList.add("hide");
    dispQuiz.classList.add("quizArea");
    // dispQuiz.innerHTML = "<h1>Question Displayed</h1>";
    quizTimer = setInterval(function() {
        dispTimer.textContent = count;
        count--;
        if (isWrong) {
            count = count - 5;
        }
        if (dispTimer.textContent == 0){
            dispUserStat();
        }
    }, 1000);
}

function dispUserStat() {
    clearInterval(quizTimer);
    dispQuiz.classList.remove("quizArea");
    dispQuiz.classList.add("userInfo");
    dispQuiz.appendChild(divInputDisp);
    divInputDisp.appendChild(teamLabel);
    teamLabel.after(teamName);
    divInputDisp.after(divScoreBt);
    divScoreBt.appendChild(scoreBt);
}




//Event Listeners
startBt.addEventListener("click", startQuiz);

