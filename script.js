// GIVEN I am taking a code quiz

//getting a handle is always first
    //create variables for everything needed
var timerCount;
var timeLeft;
var testDone;
var timeInterval;
var score= 0;
var currentQuestionIndex = 0;


    //identify them in html document.getElementByID etc 
var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var answersList = document.querySelector(".answers-list");
var resultText = document.querySelector(".result-text"); 
var timer = document.querySelector(".timer");
var timerText = document.querySelector(".timer-text");
var score = document.querySelector(".score");
var saveScoreButton = document.querySelector(".save-score");


//getting started with the basics
    //Create a quiz in javascript, HTML & CSS could be basic
    //html could contain body and divs
    //How can we add questions and answers? Arrays, objects, var questions: etc
    var Questions =[];
    var Answers =[];
    //ex question : what color is the sun
    //question must be included
    //answers must be included
    //correct answer must be given



// WHEN I click the start button
    //create a function to start the quiz
    function startQuiz(){



    }
    //must use click eventListener, "click"
    startButton.addEventListener("click", startQuiz);

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
    function startTimer(){
        timerInterval = setInterval(function() {
            timeLeft--;
            timeRemaining.textContent = timeLeft;
            if (timeLeft <= 0 || currentQuestionIndex === questions.length) {
                endQuiz();
            }
        }, 1000);
    }

// WHEN I answer a question
    //there will be a questions with multiple answers (TF? Multiple Choice? Both?)
function selectAnswer(){


}
// THEN I am presented with another question
    //Next question will apear when I click on answer. 
    //function navigate(direction)??
    //propogation??
    //event.listener click
function nextQuestion(){


    
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