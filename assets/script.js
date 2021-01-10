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
var quizOver = document.createElement("h2");
var overText = document.createElement("h4");
quizOver.setAttribute("class", "color-red");
overText.setAttribute("class", "color-set;");
quizOver.textContent = "Quiz Over";
overText.textContent = "Please enter your team name and click on button to display team score";

var count = 2;
var isWrong = false;
var quizTimer;
var currentScore = 30;
var newTeam = true;
// var teamData = [{name: "", totalScore: 0, rank: 0}];
var teamData = new Array();


//Functions
function startQuiz() {
    remvCols[0].classList.add("hide");
    remvCols[1].classList.add("hide");
    remvCols[2].classList.add("hide");
    dispQuiz.classList.add("quizArea");
    // dispQuiz.innerHTML = "<h1>Question Displayed</h1>";
    quizTimer = setInterval(function () {
        dispTimer.textContent = count;
        count--;
        if (isWrong) {
            count = count - 5;
        }
        if (dispTimer.textContent == 0) {
            dispUserStat();
            currentScore += 5;
        }
    }, 1000);
}

function dispUserStat() {
    clearInterval(quizTimer);
    dispQuiz.classList.remove("quizArea");
    dispQuiz.classList.add("userInfo");
    dispQuiz.appendChild(divInputDisp);
    divInputDisp.appendChild(quizOver);
    quizOver.after(overText);
    divInputDisp.after(divScoreBt);
    divScoreBt.appendChild(teamLabel);
    teamLabel.after(teamName);
    divScoreBt.appendChild(scoreBt);
}

function TeamData(tname, tscore, rank) {
    this.teamName = tname;
    this.totalScore += tscore;
    this.rank = rank;
}

function displayScore() {
    var team = teamName.value;
    divInputDisp.classList.add("hide");
    divScoreBt.classList.add("hide");
    // var teamArea = document.createElement("col-lg-12");

    var teamNameLabel = document.createElement("div");
    var teamScoreLabel = document.createElement("div");
    var teamRankLabel = document.createElement("div");
    var labelRow = document.createElement("div");
    teamNameLabel.setAttribute("class", "col-lg-3 bg-light");
    teamScoreLabel.setAttribute("class", "col-lg-3 bg-light");
    teamRankLabel.setAttribute("class", "col-lg-3 bg-light");


    teamNameLabel.textContent = "Team Name";
    teamScoreLabel.textContent = "Total Score";
    teamRankLabel.textContent = "Rank";

    // var labelRow = document.createElement("row");
    console.log(localStorage.getItem("teamDataLS"));
    var teamDataLS = JSON.parse(localStorage.getItem("teamDataLS"));
    console.log(teamDataLS);
    if (teamDataLS != null) {
        teamDataLS.forEach((item) => {
            if (item.name === team) {
                item.totalScore += currentScore;
                console.log(teamData);
                newTeam = false;
            }
        });
    }
    
    if (teamDataLS.length === 0 || newTeam) {
        teamDataLS.push({
            name: team,
            totalScore: currentScore,
            rank: 0
        });
    } 
    teamData = teamDataLS;
    console.log(teamData);
    console.log("2+ " + teamData);
    localStorage.setItem("teamDataLS", JSON.stringify(teamData));

    displayRow.after(labelRow);
    displayRow.classList.add("hide");
    labelRow.setAttribute("class", "row user-info");
    labelRow.appendChild(teamNameLabel);
    labelRow.appendChild(teamScoreLabel);
    labelRow.appendChild(teamRankLabel);
    console.log(teamData);
    var byScore = teamData.sort((a, b) => a.totalScore > b.totalScore ? 1 : 1);
    
    var i = 0;
    byScore.forEach((item, index) => {
        i++
        var holderRow = document.createElement("row");
        var teamNameHolder = document.createElement("div");
        var teamScoreHolder = document.createElement("div");
        var teamRankHolder = document.createElement("div");
        teamNameHolder.setAttribute("class", "col-lg-3 bg-light");
        teamScoreHolder.setAttribute("class", "col-lg-3 bg-light");
        teamRankHolder.setAttribute("class", "col-lg-3 bg-light");
        holderRow.setAttribute("class", "row user-info");
        labelRow.after(holderRow);
        holderRow.appendChild(teamNameHolder);
        holderRow.appendChild(teamScoreHolder);
        holderRow.appendChild(teamRankHolder);
        teamNameHolder.textContent = item.name;
        console.log(teamNameHolder);
        teamScoreHolder.textContent = item.totalScore;
        teamRankHolder.textContent = i;
    });


};





//Event Listeners
startBt.addEventListener("click", startQuiz);

scoreBt.addEventListener("click", displayScore);