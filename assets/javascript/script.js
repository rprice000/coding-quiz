
var questionsList = [
  {
    question:  "Commonly used datatypes DO NOT include?",
    choices:  ["1. Strings","2. Boolean", "3. Alerts", "4. Numbers"],
    answer:  "3. Alerts"
  },
  {
    question:  "The condition in an if/else statement is enclosed with _______.",
    choices:  ["1. Quotes","2. Curly Brackets","3. Parenthesis", "4. Square Brackets"],
    answer:  "2. Curly Brackets"
  },
  {
    question:  "Arrays in JavaScript can be used to store ________.",
    choices:  ["1. Numbers and Strings","2. Other Arrays", "3. Booleans", "4. All of the Above"],
    answer:  "4. All of the Above"
  },
  {
    question:  "String values must be enclosed within ______ when being assigned to variables.",
    choices:  ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    answer:  "3. Quotes"
  },
  {
    question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices:  ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer:  "4. console.log"
  }
]

var timer = document.getElementById("timer");
var timeCountDown = document.getElementById("timeCountDown");
var timesUp = document.getElementById("timesUp");

var quizPromptEl = document.getElementById("quizPrompt");
var startQuizButton = document.getElementById("startButton");

var questionsHolder = document.getElementById("questionsHolder");
var questionPrompt = document.getElementById("questionPrompt");
var choice1 = document.getElementById("choice0");
var choice2 = document.getElementById("choice1");
var choice3 = document.getElementById("choice2");
var choice4 = document.getElementById("choice3");
var showIfCorrect = document.getElementById("showIfCorrect");

var userFinalScoreData = document.getElementById("userFinalScoreData");
var submitScore = document.getElementById("submitScore");
var initialsData = document.getElementById("initialsData");
var everything = document.getElementById("everything");

var highScores = document.getElementById("highScores");
var finalScore = document.getElementById("finalScore");

var goBack = document.getElementById("goBack");
var clearScores = document.getElementById("clearScores");
var viewHighScore = document.getElementById("viewHighScore");
var scoresList = document.getElementById("scoresList");

var correctChoices = 0;
var questionNumber = 0;
var timeRemaining = 75;

function preparingQuiz() {
    questionNumber = 0;
    totalTime = 75;
    timeCountDown.textContent = timeRemaining;
    initialsData.textContent = "";
    
    quizPromptEl.style.display = "none";
    questionsHolder.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startCountDown = setInterval(function () {
        timeRemaining--;
        timeCountDown.textContent = timeRemaining;
        if(timeRemaining <= 0) {
            clearInterval(startCountDown);
            if (questionNumber < questionsList.length - 1) {
                quizOver();
            }
        }
    }, 1000);

    showQuestions();
};

function showQuestions() {
    nextQuestion();
}

function nextQuestion() {
    questionPrompt.textContent = questionsList[questionNumber].question;
    choice1.textContent = questionsList[questionNumber].choices[0];
    choice2.textContent = questionsList[questionNumber].choices[1];
    choice3.textContent = questionsList[questionNumber].choices[2];
    choice4.textContent = questionsList[questionNumber].choices[3];
}

function seeAnswer(answer) {
    var dividingLine = document.getElementById("dividingLine");
    dividingLine.style.display = "block";
    showIfCorrect.style.display = "block";

    if(questionsList[questionNumber].answer === questionsList[questionNumber].choices[answer]) {
        correctChoices++;
        showIfCorrect.textContent = "Correct";
    } else {
        timeRemaining -= 10;
        timeCountDown.textContent = timeRemaining;
        showIfCorrect.textContent = "Incorrect! The answer is: " + questionsList[questionNumber].answer;
    }
    questionNumber++;
    if (questionNumber < questionsList.length) {
        nextQuestion();
    } else {
        quizOver();
    }

}

function selection1() 
{
    seeAnswer(0);
}
function selection2() 
{
    seeAnswer(1);
}
function selection3() 
{
    seeAnswer(2);
}
function selection4() 
{
    seeAnswer(3);
}

function quizOver() {
    userFinalScoreData.style.display = "block";
    questionsHolder.style.display = "none";
    quizPromptEl.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    finalScore.textContent = correctChoices;
}

function logScores (event) {
    event.preventDefault();

    if(initialsData.value === "") {
        window.alert("Please enter your initials.");
        return;
    }

    quizPromptEl.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    userFinalScoreData.style.display = "none";
    highScores.style.display = "block";

    var savedScoreData = localStorage.getItem("High Scores");
    var savedScoresArray;

    if (savedScoreData === null) {
        savedScoresArray = [];
    } else {
        savedScoresArray = JSON.parse(savedScoreData)
    }

    var savedScore = {
        initials: initialsData.value,
        score: finalScore.textContent
    };

    savedScoresArray.push(savedScore);

    var scoresString = JSON.stringify(savedScoresArray);
    window.localStorage.setItem("High Scores", scoresString);

    logScores();
}

var i = 0;

function displayScores() {

    quizPromptEl.style.display = "none";
    timer.style.display = "none";
    questionsHolder.style.display = "none";
    timesUp.style.display = "none";
    userFinalScoreData.style.display = "none";
    highScores.style.display = "block";

    var savedScoreData = localStorage.getItem("High Scores");
    
    if (savedScoreData === null) {
        return;
    }

    var storedUserData = JSON.parse(savedScoreData);

    for (; i < storedUserData.length; i++) {
        var newScores = document.createElement("p");
        newScores.innerHTML = storedUserData[i].initials + ": " + storedUserData[i].score;
        scoresList.appendChild(newScores);
    }
}

         
startQuizButton.addEventListener("click", preparingQuiz);
choice1.addEventListener("click", selection1);
choice2.addEventListener("click", selection2);
choice3.addEventListener("click", selection3);
choice4.addEventListener("click", selection4);

submitScore.addEventListener("click", function(event) {
    logScores(event);
});

viewHighScore.addEventListener("click", function(event) {
    displayScores(event);
})

goBack.addEventListener("click", function () {
    quizPromptEl.style.display = "block";
    highScores.style.display = "none";
});

clearScores.addEventListener("click", function () {
    window.localStorage.removeItem("High Scores");
    scoresList.innerHTML = "High Scores have been reset.";
});




