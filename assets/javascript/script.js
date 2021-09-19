//  Variable that creates questions, question choices, and answers to the question 
var questionsList = [
  {
    question:  "Commonly used datatypes DO NOT include?",
    choices:  ["Strings","Boolean", "Alerts", "Numbers"],
    answer:  "Alerts"
  },
  {
    question:  "The condition in an if/else statement is enclosed with _______.",
    choices:  ["Quotes","Curly Brackets","Parenthesis", "Square Brackets"],
    answer:  "Curly Brackets"
  },
  {
    question:  "Arrays in JavaScript can be used to store ________.",
    choices:  ["Numbers and Strings","Other Arrays", "Booleans", "All of the Above"],
    answer:  "All of the Above"
  },
  {
    question:  "String values must be enclosed within ______ when being assigned to variables.",
    choices:  ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer:  "Quotes"
  },
  {
    question:  "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices:  ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer:  "console.log"
  }
]

// Variables for changing time before and during quiz
var timer = document.getElementById("timer");
var timeCountDown = document.getElementById("timeCountDown");
var timesUp = document.getElementById("timesUp");
var correctChoices = 0;
var questionNumber = 0;
var timeRemaining = 75;

// Variables that will change the content of the page when user clicks Start Quiz
var startQuizButton = document.getElementById("startButton");
var quizPromptEl = document.getElementById("quizPrompt");
var questionsHolder = document.getElementById("questionsHolder");


function startingQuiz() {
// Start the quiz on question 1 "0" with a start time of 75 seconds
    questionNumber = 0;
    totalTime = 75;
    timeCountDown.textContent = timeRemaining;
    initialsData.textContent = "";

// Helps change content of page to display correct content during quiz
    quizPromptEl.style.display = "none";
    questionsHolder.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

// Decrements the time by 10 seconds if the user anwsers a question wrong
    var startCountDown = setInterval(function () {
        timeRemaining--;
        timeCountDown.textContent = timeRemaining;
        if(timeRemaining <= 0) {
            clearInterval(startCountDown);
            if (questionNumber < questionsList.length - 1) {
                quizOver();
            }
        }
// Sets how fast the timer will decrement
    }, 1000);
    showQuestions();
};

// Function to move to next question after submitting answers
function showQuestions() {
    nextQuestion();
}

// Variable for changing the content of the question as the user moves from one question to the next
var questionPrompt = document.getElementById("questionPrompt");

// Creates variable for each choice the user can make
var choice1 = document.getElementById("choice0");
var choice2 = document.getElementById("choice1");
var choice3 = document.getElementById("choice2");
var choice4 = document.getElementById("choice3");

// Function for changint the content of the question and answer choices
function nextQuestion() {
    questionPrompt.textContent = questionsList[questionNumber].question;
    choice1.textContent = questionsList[questionNumber].choices[0];
    choice2.textContent = questionsList[questionNumber].choices[1];
    choice3.textContent = questionsList[questionNumber].choices[2];
    choice4.textContent = questionsList[questionNumber].choices[3];
}

// Variable to show if user answered a question correct or incorrect
var showIfCorrect = document.getElementById("showIfCorrect");
// Function to display if user answered a question correct or incorrect
function seeAnswer(answer) {
    showIfCorrect.style.display = "block";

    if(questionsList[questionNumber].answer === questionsList[questionNumber].choices[answer]) {
        correctChoices++;
        showIfCorrect.textContent = "Correct";
    } else {
// Decrements timer by 10 seconds if answer is incorrect
        timeRemaining -= 10;
        timeCountDown.textContent = timeRemaining;
        showIfCorrect.textContent = "Incorrect! The answer is: " + questionsList[questionNumber].answer;
    }
// Moves to next question in questionsList
// Moves user to next question
    questionNumber++;
    if (questionNumber < questionsList.length) {
        nextQuestion();
    } else {
        quizOver();
    }
}

// Created functions for each choice a user can make
function selection1() {
    seeAnswer(0);
}
function selection2() {
    seeAnswer(1);
}
function selection3() {
    seeAnswer(2);
}
function selection4() {
    seeAnswer(3);
}

// Event listeners for each choice a user can make
startQuizButton.addEventListener("click", startingQuiz);
choice1.addEventListener("click", selection1);
choice2.addEventListener("click", selection2);
choice3.addEventListener("click", selection3);
choice4.addEventListener("click", selection4);


// Variables to displaying content when user is typing initials and saving scores
var userFinalScoreData = document.getElementById("userFinalScoreData");
var finalScore = document.getElementById("finalScore");
var initialsData = document.getElementById("initialsData");

// Function for displaying content when when user is typing initials and saving scores
function quizOver() {
    userFinalScoreData.style.display = "block";
    questionsHolder.style.display = "none";
    quizPromptEl.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";

    finalScore.textContent = correctChoices;
}

// Variable for displaying high score list
var highScores = document.getElementById("highScores");

// Function for logging scores
function logScores(event) {
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
// Creates array to place user data into
        savedScoresArray = [];
    } else {

// Creates user data objects to become a strings
        savedScoresArray = JSON.parse(savedScoreData)
    }

    var savedScore = {
        initials: initialsData.value,
        score: finalScore.textContent
    };
// Sets user data as a string to be displayed when user clicks View High Scores button
    savedScoresArray.push(savedScore);
    var scoresString = JSON.stringify(savedScoresArray);
    window.localStorage.setItem("High Scores", scoresString);
    displayScores();
};

var submitScore = document.getElementById("submitScore");

submitScore.addEventListener("click", function(event) {
    logScores(event);
});


// Variables for showing quiz scores
var scoresList = document.getElementById("scoresList");
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

var viewHighScore = document.getElementById("viewHighScore");

viewHighScore.addEventListener("click", function(event) {
    displayScores(event);
})

var goBack = document.getElementById("goBack");

goBack.addEventListener("click", function () {
    quizPromptEl.style.display = "block";
    highScores.style.display = "none";
});

var clearScores = document.getElementById("clearScores");

clearScores.addEventListener("click", function () {
    window.localStorage.removeItem("High Scores");
    scoresList.innerHTML = "High Scores have been reset.";
});




