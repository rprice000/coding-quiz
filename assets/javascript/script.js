
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
    choices:  ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log",],
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
var initialData = document.getElementById("initialData");
var everything = document.getElementById("everything");

var highScores = document.getElementById("highScores");
var finalScore = document.getElementById("finalScore");

var goBack = document.getElementById("goBack");
var clearScores = document.getElementById("clearScores");
var viewHighScore = document.getElementById("viewHighScore");
var scoresList = document.getElementById("scoresList");

var correctChoices = 0;

function preparingQuiz() {
    questionNumber = 0
    totalTime = 75;
    timeCountDown.textContent = timeRemaining;
    initialData.textContent = "";
    
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
    
}




         










