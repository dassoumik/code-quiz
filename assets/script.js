//Assignment Statements
var HTMLscore = 0,
    HTMLqstn = 0,
    CSSscore = 0,
    CSSqstn = 0,
    jScriptScore = 0,
    jScriptQstn = 0;
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
divInputDisp.setAttribute("class", "col-sm-12 divSize");
var divScoreBt = document.createElement("div");
divScoreBt.classList.add("col-sm-12");
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
var dummyButton = document.createElement("button");
dummyButton.classList.add("hide");
var count = 60;
var isWrong = false;
var ansClicked = true;
var quizTimer;
var currentScore = 0;
var newTeam = true;
var mySound;
var teamData = new Array();

var quizData = [{
        quiz: "Which HTML element do not need a closing tag?",
        opt1: "nav",
        opt2: "form",
        opt3: "link",
        opt4: "span",
        ans: "opt3",
        topic: "HTML"
    },

    {
        quiz: 'What will the following line of code select? ~document.querySelector("#div");',
        opt1: "all 'div' elements",
        opt2: "all elements with class div",
        opt3: "first 'div' element",
        opt4: "element with id 'div'",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "Select the correct HTML tag to make a text bold.",
        opt1: "bb",
        opt2: "b",
        opt3: "bold",
        opt4: "bo",
        ans: "opt2",
        topic: "HTML"
    },

    {
        quiz: "Which of the following function of String object produces an HTML hypertext link for requesting another URL?",
        opt1: "small()",
        opt2: "sup()",
        opt3: "link()",
        opt4: "bo",
        ans: "opt3",
        topic: "jScript"
    },

    {
        quiz: "Which of the following is the output of the below JavaScript code? ~var x = [typeof x, typeof y][1]; ~typeof typeof x;",
        opt1: "string",
        opt2: "number",
        opt3: "object",
        opt4: "undefined",
        ans: "opt1",
        topic: "jScript"
    },

    {
        quiz: "Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",
        opt1: "concat()",
        opt2: " valueOf()",
        opt3: "None",
        opt4: " toString()",
        ans: "opt4",
        topic: "jScript"
    },


    {
        quiz: "What is the output of the following JavaScript snippet?    function() { ~var a = 10; ~if(a > 5) { a = 7; a = 7;" +
            "} alert(a); } ",
        opt1: "null",
        opt2: "undefined",
        opt3: "19",
        opt4: "7",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "What is the function of Array object that runs through each element of the array?",
        opt1: "forEach()",
        opt2: "filter()",
        opt3: "every()",
        opt4: "concat()",
        ans: "opt1",
        topic: "jScript"
    },

    {
        quiz: "Which of the following will return the type of the arguments passed to a function?",
        opt1: "getType function",
        opt2: "typeof operator",
        opt3: "Both",
        opt4: "None",
        ans: "opt2",
        topic: "jScript"
    },

    {
        quiz: "Which of the following is the output of the below JavaScript code? ~function() {  if(true) {  var a = 5;  }    ~   alert(a);}",
        opt1: "undefined",
        opt2: "null",
        opt3: "0",
        opt4: "5",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "Which of the following methods removes the last element from an array and returns that element?",
        opt1: "last()",
        opt2: "None",
        opt3: "get()",
        opt4: "pop()",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "Which of the following function of String object returns the capitalized string while respecting the current locale?",
        opt1: "substring()",
        opt2: "toUpperCase()",
        opt3: "toLocaleUpperCase()",
        opt4: "toString()",
        ans: "opt3",
        topic: "jScript"
    },

    {
        quiz: "The functions get called in the order as mentioned. Result = ? ~var a = 5; function first() {a = 6;} ~function second() {alert(a);}",
        opt1: "null",
        opt2: "0",
        opt3: "5",
        opt4: "6",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "Select a String function that creates a string and display in a big font as if it were in a tag?",
        opt1: "italics()",
        opt2: "blink()",
        opt3: "big()",
        opt4: "anchor()",
        ans: "opt3",
        topic: "jScript"
    },

    {
        quiz: "Which of the following is the output of the below JavaScript code? ~ var x = [typeof x, typeof y][1]; ~typeof typeof x;",
        opt1: "number",
        opt2: "string",
        opt3: "object",
        opt4: "undefined",
        ans: "opt2",
        topic: "jScript"
    },

    {
        quiz: "Which of the following functions of Number object would return a string version of the number that may change according to the browser’s locale settings?",
        opt1: "toExponential()",
        opt2: "toFixed()",
        opt3: "toLocaleString()",
        opt4: "toString()",
        ans: "opt3",
        topic: "jScript"
    },

    {
        quiz: "Which of the following method of Boolean object returns a string depending upon the value of the object?",
        opt1: "toSource()",
        opt2: "valueOf()",
        opt3: "toString()",
        opt4: "None",
        ans: "opt3",
        topic: "jScript"
    },

    {
        quiz: "What is the function of Array object that adds and/or removes elements from an array?",
        opt1: "toSource()",
        opt2: "sort()",
        opt3: "unshift()",
        opt4: "splice()",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "Select a String function that finds the match between a regular expression and a string, and to replace the matched substring with a new substring?",
        opt1: "search()",
        opt2: "concat()",
        opt3: "match()",
        opt4: "replace()",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",
        opt1: "pop()",
        opt2: "some()",
        opt3: "push()",
        opt4: "concat()",
        ans: "opt4",
        topic: "jScript"
    },

    {
        quiz: "Which of the following function of String object would compare a regular expression with a string?",
        opt1: "match()",
        opt2: "concat()",
        opt3: "replace()",
        opt4: "search()",
        ans: "opt1",
        topic: "jScript"
    },

    {
        quiz: "Which of the following functions of Number object would display output in exponential format?",
        opt1: "toExponential()",
        opt2: "toFixed()",
        opt3: "toPrecision()",
        opt4: "toLocaleString()",
        ans: "opt1",
        topic: "jScript"
    },

    {
        quiz: "In CSS, what is the correct option to select all the tags on a page?",
        opt1: "None",
        opt2: ".p { }",
        opt3: "#p { }",
        opt4: "p { }",
        ans: "opt4",
        topic: "CSS"
    },

    {
        quiz: "For users that use the tab key to navigate websites, what property represents this way of moving from one element to another?",
        opt1: "a:link",
        opt2: "a:active",
        opt3: "a:visited",
        opt4: "a:focus",
        ans: "opt4",
        topic: "CSS"
    },

    {
        quiz: "Select the correct HTML tag to make a text italic?",
        opt1: "Italic",
        opt2: "I",
        opt3: "It",
        opt4: "None",
        ans: "opt2",
        topic: "HTML"
    },

    {
        quiz: "In CSS,Select the property used to set the spacing in between lines of text?",
        opt1: "letter-spacing",
        opt2: "spacing",
        opt3: "line-height",
        opt4: "line-spacing",
        ans: "opt3",
        topic: "CSS"
    },

    {
        quiz: "Select the property that is used to change the list style to show roman numerals instead of normal numbers?",
        opt1: "list-style:roman;",
        opt2: "list-type:roman;",
        opt3: "list-bullet-type:roman-numerals;",
        opt4: "list-style-type:upper-roman;",
        ans: "opt4",
        topic: "HTML"
    },

    {
        quiz: "Select the property that is used to create spacing between HTML elements?",
        opt1: "padding",
        opt2: "spacing",
        opt3: "border",
        opt4: "margin",
        ans: "opt1",
        topic: "HTML"
    },

    {
        quiz: "Select the option to make a list that lists the items with bullets?",
        opt1: "list",
        opt2: "ul",
        opt3: "ol",
        opt4: "dl",
        ans: "opt4",
        topic: "HTML"
    },

    {
        quiz: "Select the appropriate HTML tag for inserting a line break?",
        opt1: "br",
        opt2: "lb",
        opt3: "brbr",
        opt4: "break",
        ans: "opt1",
        topic: "HTML"
    },

    {
        quiz: "Select the appropriate HTML tag used for the largest heading?",
        opt1: "heading",
        opt2: "h6",
        opt3: "h1",
        opt4: "head",
        ans: "opt3",
        topic: "HTML"
    },

    {
        quiz: "Select the option to make a list that lists the items with numbers?",
        opt1: "ol",
        opt2: "list",
        opt3: "dl",
        opt4: "ul",
        ans: "opt1",
        topic: "HTML"
    },

    {
        quiz: "In CSS,select the property used to set the background color of an image?",
        opt1: "background:color",
        opt2: "color:background",
        opt3: "background-color",
        opt4: "color",
        ans: "opt3",
        topic: "CSS"
    },

    {
        quiz: "Select the correct option to open a link in a new browser window?",
        opt1: 'A href="url" target="_blank"',
        opt2: 'A href="url" new',
        opt3: 'A href="url" target="new"',
        opt4: 'A href="url" target=_window"',
        ans: "opt3",
        topic: "HTML"
    },

    {
        quiz: "In CSS, Select the property to set an image in a list instead of a standard bullet?",
        opt1: "list-image:",
        opt2: "list-style-image:",
        opt3: "list-image-src:",
        opt4: "image-list:",
        ans: "opt2",
        topic: "CSS"
    },

    {
        quiz: "Select the correct HTML tag to make a text bold.",
        opt1: "b",
        opt2: "bb",
        opt3: "bold",
        opt4: "None",
        ans: "opt1",
        topic: "HTML"
    },

    {
        quiz: "Select the correct option to create an e-mail link?",
        opt1: "A href=mailto:xxx@yyy.com",
        opt2: 'Mail href="xxx@yyy.com"',
        opt3: 'A href="xxx@yyy.com"',
        opt4: "Mail>xxx@yyy.com/mail",
        ans: "opt1",
        topic: "HTML"
    },

    {
        quiz: "Select the property used to create space between the element’s border and inner content?",
        opt1: "border",
        opt2: "padding",
        opt3: "spacing",
        opt4: "margin",
        ans: "opt2",
        topic: "CSS"
    },

    {
        quiz: 'In CSS, Select the appropriate option to style an element so that the next element would appear right next to it not underneath it if both elements widths were collectively smaller than the container element? ~<img id=”mainpic” src=”cat.png”>',
        opt1: "img { }",
        opt2: "mainpic { }",
        opt3: "#mainpic { }",
        opt4: "mainpic { }",
        ans: "opt2",
        topic: "CSS"
    },

    {
        quiz: "In CSS, choose the correct option to select this image by its id?",
        opt1: "display:horizontal;",
        opt2: "display:inline;",
        opt3: "None",
        opt4: "margindisplay:left;",
        ans: "opt2",
        topic: "CSS"
    }
];
var index = Math.floor(Math.random()*quizData.length);

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
            ansClicked = false;
        }
        dispTimer.textContent = count;
        if (dispTimer.textContent <= 0) {
            dispUserStat();
        }
    }, 1000);
}

function displayQstn() {
    ansClicked = false;
    if (index >= quizData.length) {
        index = 0;
    }
    
    quizSection.classList.remove("hide");
    quizPreSection.classList.remove("hide");
    quizPostSection.classList.remove("hide");
    var qstnArray = quizData[index].quiz.split("~", 5);
    quizQstn.innerHTML = "";
    qstnArray.forEach(element => {
        quizQstn.innerHTML += element + "</br>";
    })
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
    index++;
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
    teamNameLabel.setAttribute("class", "col-sm-3 font-weight-bold");
    teamScoreLabel.setAttribute("class", "col-sm-3 font-weight-bold");
    teamRankLabel.setAttribute("class", "col-sm-3 font-weight-bold rearrange");
    teamNameLabel.setAttribute("style", "background-color: #e0ece4;");
    teamScoreLabel.setAttribute("style", "background-color: #e0ece4;");
    teamRankLabel.setAttribute("style", "background-color: #e0ece4;");

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
        teamData = teamDataLS;
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
        teamNameHolder.setAttribute("class", "col-sm-3 bg-light");
        teamScoreHolder.setAttribute("class", "col-sm-3 bg-light");
        teamRankHolder.setAttribute("class", "col-sm-3 bg-light rearrange");
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
    HTMLcr.textContent = String(Math.floor(HTMLscore / HTMLqstn * 100)) + "%";
    CSScr.textContent = String(Math.floor(CSSscore / CSSqstn * 100)) + "%";
    jScriptCR.textContent = String(Math.floor(jScriptScore / jScriptQstn * 100)) + "%";
    if (HTMLqstn === 0) {
        HTMLcr.textContent = "N/A";
    }
    if (CSSqstn === 0) {
        CSScr.textContent = "N/A";
    }
    if (jScriptQstn === 0) {
        jScriptCR.textContent = "N/A";
    }
};


//Event Listeners
startBt.addEventListener("click", startQuiz);

scoreBt.addEventListener("click", displayScore);

document.querySelector("#opt1").addEventListener("click", answerOption);
document.querySelector("#opt2").addEventListener("click", answerOption);
document.querySelector("#opt3").addEventListener("click", answerOption);
document.querySelector("#opt4").addEventListener("click", answerOption);