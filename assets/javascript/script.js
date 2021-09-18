
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
var questionPrompt = document.createElement("questionPrompt");
// Variable for showing if answered right or wrong
var scoreDisplay = document.createElement("scoreDisplay");
// Variable for showing user initials
var initialsContent = document.createElement("initialsContent");
// Variable for input to place user initials
var initialsInput = document.createElement("initialsInput");



















