
// Variable fow which questin to display
var quizQuestion = 0;
// Variable for which answers to display
var quizAnswerChoices = 0;
// Variable for keeping score during quiz
var score = 0;
// Variable for storing score after quiz
var finalScore = 50;
// Variable for 
var finalChoice = 0;
// Variable for storing time if time runs out
var timeKeeper = 1;
// Variable for initial start time
var startTime = 75;
// Creates Button to View Scores
var viewScoresBtn = document.getElementById('viewScores');
// Creates Button  to Start Quiz
var quizStartBtn = document.getElementById('quizStart');
// Creates button for choice 1
var choice1Btn = document.getElementById('choice1'); 
// Creates button for choice 2
var choice2Btn = document.getElementById('choice2'); 
// Creates button for choice 3
var choice3Btn = document.getElementById('choice3'); 
// Creates button for choice 4
var choice4Btn = document.getElementById('choice4');
// Creates button for saving score
var saveScore = document.getElementById('saveScore');
// Variable creates container for quiz
var parent = document.getElementById('parent');
// Variable to display count down time
var quizCountDownTime = document.getElementById('timer');
// Variable to see if user picks right or wrong answer
var answerDisplay = document.getElementById('answerDisplay');
// Variable to display questions
var questionPromptEl = document.createElement("questionPrompt");
// Variable for showing if answered right or wrong
var scoreDisplayEl = document.createElement("scoreDisplay");
// Variable for showing user initials
var initialsContentEl = document.createElement("initialsContent");
// Variable for input to place user initials
var initialsInputEl = document.createElement("initialsInput");


// Initial Display of Quiz Content
choice1Btn.style.display = 'none';
choice2Btn.style.display = 'none';
choice3Btn.style.display = 'none';
choice4Btn.style.display = 'none';
saveScore.style.display = 'none';
answerDisplay.style.display='none';
initialsInput.style.display='none';

var questionsList = {
    eachQuestion: { 
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition in an if/else statement is enclosed with _______.",
        2 : "Arrays in JavaScript can be used to store ________.",
        3 : "String values must be enclosed within ______ when being assigned to variables.",
        4 : "A very useful tool used during development and debugging for printing content to the debugger is:"
    }
};

var choiceList = {
    eachChoice: { 
        0 : { //Choice 2 - Answer 3
            0: "1. Strings",
            1: "2. Boolean",
            2: "3. Alerts",
            3: "4. Numbers"},
        1 : { //Choice 1 - Answer 2
            0: "1. Quotes",
            1: "2. Curly Brackets",
            2: "3. Parenthesis",
            3: "4. Square Brackets"},
        2 : { // Choice 3 - Answer 4
            0: "1. Numbers and Strings",
            1: "2. Other Arrays",
            2: "3. Booleans", 
            3: "4. All of the Above"},      
        3 : { //  Choice 2 - Answer 3
            0: "1. Commas",
            1: "2. Curly Brackets",
            2: "3. Quotes", 
            3: "4. Parentheses"},      
        4 : { // Choice 3 - Answer 4
            0: "1. Javascript",
            1: "2. terminal/bash",
            2: "3. for loops",
            3: "console.log"},  
    }
};


















