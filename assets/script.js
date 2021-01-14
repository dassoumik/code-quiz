//Assignment Statements
var HTMLscore = 0, HTMLqstn = 0, CSSscore = 0, CSSqstn = 0, jScriptScore = 0, jScriptQstn = 0;
var startBt = document.querySelector("#start");
var remvCols = document.getElementsByClassName("removeOnStart");
var dispQuiz = document.querySelector("#displayRow");
var dispTimer = document.querySelector("#timer");
var timeLeft = document.querySelector(".time-left");
var teamName = document.createElement("input");
var currStatHead = document.querySelector(".footer-head");
var currStat = document.querySelector(".footer");
var asideTeam = document.querySelector("#asideTeam");
var totalScore = document.querySelector("#totalScore");
var totalQstn = document.querySelector("#totalQstn");
var correctAns = document.querySelector("#correctAns");
var HTMLcr = document.querySelector("#HTMLcr");
var CSScr = document.querySelector("#CSScr");
var jScriptCR = document.querySelector("#jScriptCR");
teamName.setAttribute("type", "text");
teamName.setAttribute("class", "rounded-lg mb-2 pt-2 input-sm");
teamName.setAttribute("name", "nameBox");
teamName.setAttribute("autocomplete", "on");
var teamLabel = document.createElement("label");
teamLabel.textContent = "Team Name";
teamLabel.setAttribute("for", "nameBox");
teamLabel.setAttribute("class", "textSize text-center font-weight-bold");
var scoreBt = document.createElement("button");
var scoreBtDiv = document.createElement("div");
scoreBt.textContent = "Display Score";
scoreBt.setAttribute("class", "btn btn-primary btn-lg set-margin");
var breakLine1 = document.createElement("br");
var divInputDisp = document.createElement("div");
divInputDisp.setAttribute("class", "col-lg-12 divSize");
var divScoreBt = document.createElement("div");
divScoreBt.classList.add("col-lg-12");
var quizOver = document.createElement("h3");
var overText = document.createElement("p");
quizOver.setAttribute("class", "color-red");
overText.setAttribute("class", "text-lg-center");
quizOver.textContent = "Quiz Over";
overText.textContent = "Please enter your team name and click on button to display team score";
var opt1Bt = document.querySelector("#opt1");
var opt2Bt = document.querySelector("#opt2");
var opt3Bt = document.querySelector("#opt3");
var opt4Bt = document.querySelector("#opt4");
var quizQstn = document.querySelector(".quizQstn");
var quizSection = document.querySelector(".quizSection");
var quizPreSection = document.querySelector(".quizPreSection");
var quizPostSection = document.querySelector(".quizPostSection");
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
var teamData = new Array();

var quizData = [{quiz: "Which HTML element do not need a closing tag?",
opt1: "nav",
opt2: "form",
opt3: "link",
opt4: "span",
ans:  "opt3", 
topic: "HTML"     
},

{quiz: 'What will the following line of code select? ~document.querySelector("#div");',  
opt1: "all 'div' elements",
opt2: "all elements with class div",
opt3: "first 'div' element",
opt4: "element with id 'div'", 
ans:  "opt4",
topic: "jScript"
},

{quiz: "Select the correct HTML tag to make a text bold.",  
opt1: "bb",
opt2: "b",
opt3: "bold",
opt4: "bo", 
ans:  "opt2",
topic: "HTML"
},

{quiz: "Which of the following function of String object produces an HTML hypertext link for requesting another URL?",  
opt1: "small()",
opt2: "sup()",
opt3: "link()",
opt4: "bo", 
ans:  "opt3",
topic: "jScript"
},

{quiz: "Which of the following is the output of the below JavaScript code? ~var x = [typeof x, typeof y][1]; ~typeof typeof x;",  
opt1: "string",
opt2: "number",
opt3: "object",
opt4: "undefined", 
ans:  "opt1",
topic: "jScript"
},

{quiz: "Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",  
opt1: "concat()",
opt2: " valueOf()",
opt3: "None",
opt4: " toString()", 
ans:  "opt4",
topic: "jScript"
},


{quiz: "What is the output of the following JavaScript snippet? ~function() { ~var a = 10; ~if(a > 5) { ~ a = 7; ~a = 7;" +
        "~} ~alert(a); ~} ~",
opt1: "null",
opt2: "undefined",
opt3: "19",
opt4: "7", 
ans:  "opt4",
topic: "jScript"
},

// {quiz: "In CSS, what is the correct option to select only the paragraphs with class name 'warning'? ~<p class='warning'>Don’t do it.</p> ~<p>Do it.</p> ~<p class='warning'>Nooo, don’t do it.</p>",
// opt1: "p { }",
// opt2: "#warning { }",
// opt3: ".warning { }",
// opt4: "warning { }", 
// ans:  "opt3",
// topic: "CSS"
// }


]

//Functions
function startQuiz() {
    remvCols[0].classList.add("hide");
    remvCols[1].classList.add("hide");
    remvCols[2].classList.add("hide");
    dispQuiz.classList.add("quizArea");
    timeLeft.classList.remove("hide");
   
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
        if (dispTimer.textContent <= 0) {
            dispUserStat();
        }
    }, 1000);
}

function displayQstn() {
    ansClicked = false;    
    index = Math.floor(Math.random()*quizData.length);

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

}

function answerOption(event) {
    isWrong = false;
    switch (quizData[index].topic) {
        case "HTML":
            HTMLqstn++;
            break;
        case "CSS":
            CSSqstn++;
            break;
        case "jScript":
            jScriptQstn++;
            break;
    }
    if (event.target.matches("button") && event.target.id != quizData[index].ans) {    
        isWrong = true;
        mySound = new Audio("assets/sounds/fail-buzzer.mp3");
        mySound.play();
        wrongInd.classList.remove("hide");
    } else {
        currentScore += 5;
        switch (quizData[index].topic) {
            case "HTML":
                HTMLscore++;
                break;
            case "CSS":
                CSSscore++;
                break;
            case "jScript":
                jScriptScore++;
                break;
        }
        mySound = new Audio("assets/sounds/right-answer.mp3");
        mySound.play();
        rightInd.classList.remove("hide");
    }
    ansClicked = true;
};

function dispUserStat() {
    clearInterval(quizTimer);
    dispTimer.textContent = 0;
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
    teamLabel.after(breakLine1);
    breakLine1.after(teamName);
    divScoreBt.after(scoreBtDiv);
    scoreBtDiv.appendChild(scoreBt);
}

function displayScore() {
    var team = teamName.value.toLowerCase();
    
    divInputDisp.classList.add("hide");
    divScoreBt.classList.add("hide");
    timeLeft.classList.add("hide");
    dispTimer.classList.add("hide");
    currStatHead.classList.remove("hide");
    currStat.classList.remove("hide");
    
    var teamNameLabel = document.createElement("div");
    var teamScoreLabel = document.createElement("div");
    var teamRankLabel = document.createElement("div");
    var labelRow = document.createElement("div");
    var termRow = document.createElement("div");
    teamNameLabel.setAttribute("class", "col-lg-3 bg-light font-weight-bold");
    teamScoreLabel.setAttribute("class", "col-lg-3 bg-light font-weight-bold");
    teamRankLabel.setAttribute("class", "col-lg-3 bg-light font-weight-bold");
    
    teamNameLabel.textContent = "Team Name";
    teamScoreLabel.textContent = "Total Score";
    teamRankLabel.textContent = "Rank";
    
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
asideTeam.textContent = team;
totalScore.textContent = currentScore;
totalQstn.textContent = HTMLqstn + CSSqstn + jScriptQstn;
correctAns.textContent = HTMLscore + CSSscore + jScriptScore;
HTMLcr.textContent = String(Math.floor(HTMLscore/HTMLqstn*100)) + "%";
CSScr.textContent = String(Math.floor(CSSscore/CSSqstn*100)) + "%";
jScriptCR.textContent = String(Math.floor(jScriptScore/jScriptQstn*100)) + "%";
};


//Event Listeners
startBt.addEventListener("click", startQuiz);

scoreBt.addEventListener("click", displayScore);

document.querySelector("#opt1").addEventListener("click", answerOption);
document.querySelector("#opt2").addEventListener("click", answerOption);
document.querySelector("#opt3").addEventListener("click", answerOption);
document.querySelector("#opt4").addEventListener("click", answerOption);
