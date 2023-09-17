// GIVEN I am taking a code quiz

//identify them in html document.getElementByID etc

//button class
var startButton = document.querySelector(".start-button");

//question container elements:
var answersList = document.querySelector(".answers-list");
var resultText = document.querySelector(".result-text");
var questionText = document.querySelector("question-text");

//timer container elements:
var timer = document.querySelector(".timer");
var timerText = document.querySelector(".timer-text");

//score container elements:
var score = document.querySelector(".score");
var saveScoreButton = document.querySelector(".save-score");

//initials container

var initialsInput = document.querySelector(".initials");

//create variables for everything needed
var timeInterval;
var score = 0;
var currentQuestionIndex = 0;

//getting started with the basics
//Create a quiz in javascript, HTML & CSS could be basic
//html could contain body and divs
//How can we add questions and answers? Arrays, objects, var questions: etc
var Questions = [
    {
        question: "what does the H in HTML stand for?",
        answers: ["hypertext", "hello", "handle"],
        correctAnswer: "hypertext"
    },

    {
        question: "What is a variable in javascript?",
        answers: ["a handle", "a function", "a container to store data"],
        correctAnswer: "a container to store data"
    },

    {
        question: "what is a function in Javascript?",
        answers: ["a set of statements that perform a task", "a set of strings", "a common value"],
        correctAnswer: "a set of statements that perform a task"
    }
];
//ex question : what color is the sun
//question must be included
//answers must be included
//correct answer must be given

// WHEN I click the start button
//create a function to start the quiz
function startQuiz() {
  startTimer();
  nextQuestion();
}
//must use click eventListener, "click"
//must create button for that

// THEN a timer starts and I am presented with a question
//must create a function with interval, increments??, decrements??, timer does not stop??
//if timeLeft<=0 and ||  all questions are answered, end quiz
//Time variables
//var timeLeft = 60 seconds etc
//var timerInterval
// Timer that counts down

// Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//questions.length = the number of questions.
function startTimer() {
  var seconds = 60;
  timer.textContent = seconds;

  timeInterval = setInterval(function () {
    seconds--;
    timer.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000);
}

// WHEN I answer a question
//there will be a questions with multiple answers (TF? Multiple Choice? Both?)
function selectAnswer() {}
// THEN I am presented with another question
//Next question will apear when I click on answer.
//function navigate(direction)??
//propogation??
//event.listener click
function nextQuestion() {
    if(currentQuestionIndex < Questions.length){
        var question = questions[currentQuestionIndex];
        var questionText.textContent = questions
    }

}
// WHEN I answer a question incorrectly
//if correct....else...
//click on incorrect answer

// THEN time is subtracted from the clock
//else deduct time from timer
// WHEN all questions are answered or the timer reaches 0
//if time reaches zero, game over
//if all questions =complete, game over
// THEN the game is over
//game will be over
// WHEN the game is over
//if game is over
// THEN I can save my initials and my score

//save scores
//localStorage.setItem
function saveScore(){
    var initials = initialsInput.a();

}

//button event listeners
startButton.addEventListener("click", startQuiz);
saveScoreButton.addEventListener("click", saveScore);
