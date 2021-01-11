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
scoreBt.setAttribute("class", "btn btn-primary btn-lg set-margin");
var breakLine1 = document.createElement("br");
var divInputDisp = document.createElement("div");
divInputDisp.setAttribute("class", "col-lg-12 divSize");
var divScoreBt = document.createElement("div");
divScoreBt.classList.add("col-lg-12");
var quizOver = document.createElement("h5");
var overText = document.createElement("div");
quizOver.setAttribute("class", "color-red");
overText.setAttribute("class", "color-set;");
quizOver.textContent = "Quiz Over";
overText.textContent = "Please enter your team name and click on button to display team score";
var opt1Bt = document.querySelector("#opt1");
var opt2Bt = document.querySelector("#opt2");
var opt3Bt = document.querySelector("#opt3");
var opt4Bt = document.querySelector("#opt4");
// var div1opt1 = document.querySelector(".div");
// var div2opt2 = document.querySelector(".div");
// var div3opt3 = document.querySelector(".div");
// var div4opt4 = document.querySelector(".div");
var quizQstn = document.querySelector(".quizQstn");
// opt1Bt.setAttribute("class", "optBt btn btn-primary btn-lg bg-red");
// opt2Bt.setAttribute("class", "optBt btn btn-primary btn-lg bg-red");
// opt3Bt.setAttribute("class", "optBt btn btn-primary btn-lg bg-red");
// opt4Bt.setAttribute("class", "optBt btn btn-primary btn-lg bg-red");
// opt1Bt.setAttribute("id", "opt1Bt");
// opt2Bt.setAttribute("id", "opt2Bt");
// opt3Bt.setAttribute("id", "opt3Bt");
// opt4Bt.setAttribute("id", "opt4Bt");
// var breakLine1 = document.createElement("br");
// var breakLine2 = document.createElement("br");
// var breakLine3 = document.createElement("br");
// var breakLine4 = document.createElement("br");
var quizSection = document.querySelector(".quizSection");
var quizPreSection = document.querySelector(".quizPreSection");
var quizPostSection = document.querySelector(".quizPostSection");
// quizSection.setAttribute("class", "col-lg-9 rounded bg-light qa-layout mt-5");
// quizPreSection.setAttribute("class", "col-lg-2 rounded bg-light qa-layout mt-5");
// quizPostSection.setAttribute("class", "col-lg-1 rounded bg-light qa-layout mt-5");
var optBt;
var topicArea = document.querySelector("#topic");
var topicItem = document.querySelector("#topic-item");
var rightInd = document.querySelector("#right");
var wrongInd = document.querySelector("#wrong");
var count = 60;
var isWrong = false;
var ansClicked = true;
var quizTimer;
var currentScore = 0;
var newTeam = true;
var index;
var mySound;
// var teamData = [{name: "", totalScore: 0, rank: 0}];
var teamData = new Array();
var quizData = [{quiz: "Which HTML element do not need a closing tag?",
opt1: "nav",
opt2: "form",
opt3: "link",
opt4: "span",
ans:  "opt3", 
topic: "HTML"     
},

{quiz: 'What will the following line of code select?' +
'document.querySelector("#div");',
opt1: "all 'div' elements",
opt2: "all elements with class div",
opt3: "first 'div' element",
opt4: "element with id 'div'", 
ans:  "opt4",
topic: "jScript"
}
]


//Functions
function startQuiz() {
    remvCols[0].classList.add("hide");
    remvCols[1].classList.add("hide");
    remvCols[2].classList.add("hide");
    dispQuiz.classList.add("quizArea");
    // var optBt = document.querySelectorAll(".optBt");
    // console.log(optBt);
    // dispQuiz.innerHTML = "<h1>Question Displayed</h1>";
    quizTimer = setInterval(function () {
        count--;
        document.querySelector("#wrong").classList.add("hide");
        document.querySelector("#right").classList.add("hide");

        if (ansClicked) {
            displayQstn();
        }
        if (isWrong) {
            count = count - 10;
            isWrong = false;
        } else if (ansClicked) {
            currentScore += 5;
            ansClicked =false;
        }
        dispTimer.textContent = count;
        if (dispTimer.textContent == 0) {
            dispUserStat();
        }
    }, 1000);
}

function displayQstn() {
    // isWrong = false;
    ansClicked = false;    
    index = Math.floor(Math.random()*quizData.length);
    // dispQuiz.appendChild(quizPreSection);
    // dispQuiz.appendChild(quizSection);
    // dispQuiz.appendChild(quizPostSection);
    // quizSection.appendChild(quizQstn);
    // quizQstn.after(breakLine1);
    // breakLine1.after(div1opt1);
    // div1opt1.appendChild(opt1Bt);
    // opt1Bt.after(breakLine2);
    // div1opt1.after(div2opt2);
    // div2opt2.appendChild(opt2Bt);
    // opt2Bt.after(breakLine3);
    // div2opt2.after(div3opt3);
    // div3opt3.appendChild(opt3Bt);
    // opt3Bt.after(breakLine4);
    // div3opt3.after(div4opt4);
    // div4opt4.appendChild(opt4Bt);
    quizSection.classList.remove("hide");
    quizPreSection.classList.remove("hide");
    quizPostSection.classList.remove("hide");
    quizQstn.textContent = quizData[index].quiz;
    opt1Bt.textContent = quizData[index].opt1;
    opt2Bt.textContent = quizData[index].opt2;
    opt3Bt.textContent = quizData[index].opt3;
    opt4Bt.textContent = quizData[index].opt4;
    topicArea.classList.remove("hide");
    topicItem.textContent = quizData[index].topic;
    // optBt = document.querySelector(".optBt");
    // console.log(optBt);
    
    
    // return isWrong;      
}

function answerOption(event) {
    isWrong = false;
    if (event.path[0].id.trim() != quizData[index].ans) {
        isWrong = true;
        mySound = new Audio("assets/sounds/fail-buzzer.mp3");
        mySound.play();
        wrongInd.classList.remove("hide");
    } else {
        currentScore += 5;
        mySound = new Audio("assets/sounds/right-answer.mp3");
        mySound.play();
        rightInd.classList.remove("hide");
    }
    ansClicked = true;
    // return;
};

function dispUserStat() {
    clearInterval(quizTimer);
    dispQuiz.classList.remove("quizArea");
    dispQuiz.classList.add("userInfo");
    quizSection.classList.add("hide");
    quizPreSection.classList.add("hide");
    quizPostSection.classList.add("hide");
    dispQuiz.appendChild(divInputDisp);
    divInputDisp.appendChild(quizOver);
    quizOver.after(overText);
    overText.after(divScoreBt);
    divScoreBt.appendChild(teamLabel);
    teamLabel.after(teamName);
    divScoreBt.appendChild(scoreBt);
}

// function TeamData(tname, tscore, rank) {
//     this.teamName = tname;
//     this.totalScore += tscore;
//     this.rank = rank;
// }

function displayScore() {
    var team = teamName.value;
    divInputDisp.classList.add("hide");
    divScoreBt.classList.add("hide");
    // var teamArea = document.createElement("col-lg-12");
    
    var teamNameLabel = document.createElement("div");
    var teamScoreLabel = document.createElement("div");
    var teamRankLabel = document.createElement("div");
    var labelRow = document.createElement("div");
    var termRow = document.createElement("div");
    teamNameLabel.setAttribute("class", "col-lg-3 bg-light");
    teamScoreLabel.setAttribute("class", "col-lg-3 bg-light");
    teamRankLabel.setAttribute("class", "col-lg-3 bg-light");
    
    
    teamNameLabel.textContent = "Team Name";
    teamScoreLabel.textContent = "Total Score";
    teamRankLabel.textContent = "Rank";
    
    // var labelRow = document.createElement("row");
    var teamDataLS = JSON.parse(localStorage.getItem("teamDataLS"));
    if (teamDataLS != null) {
        teamDataLS.forEach((item) => {
            if (item.name === team) {
                item.totalScore += currentScore;
                newTeam = false;
            }
        });
    }
    
    if (teamDataLS == null) {
        teamData.push({
            name: team,
            totalScore: currentScore,
            rank: 0
        });
    } else if (newTeam) {
        teamDataLS.push({
            name: team,
            totalScore: currentScore,
            rank: 0
        });
        teamData = teamDataLS;
    }
    localStorage.setItem("teamDataLS", JSON.stringify(teamData));
    
    displayRow.after(labelRow);
    labelRow.after(termRow);
    displayRow.classList.add("hide");
    labelRow.setAttribute("class", "row user-info");
    labelRow.appendChild(teamNameLabel);
    labelRow.appendChild(teamScoreLabel);
    labelRow.appendChild(teamRankLabel);
    // var byScore = teamData.sort((a, b) => a.totalScore > b.totalScore ? 1 : 1);
    var byScore = teamData.sort((a, b) => {
        return b.totalScore - a.totalScore
    });
    
    var i = 1;
    byScore.forEach((item, index) => {
        if (index > 0) {
            if ((byScore[index].totalScore != byScore[index - 1].totalScore)) {
                i++;
            } 
        }
        var holderRow = document.createElement("row");
        var teamNameHolder = document.createElement("div");
        var teamScoreHolder = document.createElement("div");
        var teamRankHolder = document.createElement("div");
        teamNameHolder.setAttribute("class", "col-lg-3 bg-light");
        teamScoreHolder.setAttribute("class", "col-lg-3 bg-light");
        teamRankHolder.setAttribute("class", "col-lg-3 bg-light");
        holderRow.setAttribute("class", "row user-info");
        termRow.before(holderRow);
        holderRow.appendChild(teamNameHolder);
        holderRow.appendChild(teamScoreHolder);
        holderRow.appendChild(teamRankHolder);
        teamScoreHolder.textContent = item.totalScore;
        teamRankHolder.textContent = i;
        if (i === 1) {
            teamNameHolder.innerHTML = "<span><i class='icon-star color-red'></i></span>" + "  " + item.name + "  " + "<span><i class='icon-star color-red'></i></span>"
        } else {
            teamNameHolder.textContent = item.name;
        }
    });
};




//Event Listeners
startBt.addEventListener("click", startQuiz);

scoreBt.addEventListener("click", displayScore);

document.querySelector("#opt1").addEventListener("click", answerOption);
document.querySelector("#opt2").addEventListener("click", answerOption);
document.querySelector("#opt3").addEventListener("click", answerOption);
document.querySelector("#opt4").addEventListener("click", answerOption);
