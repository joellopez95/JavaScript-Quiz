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
var questions = [
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

//hide the start button from site
//found info in "linuxhint.com"
startButton.style.display = "none"; 

  startTimer();
  nextQuestion();
}

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
// THEN I am presented with another question
//Next question will apear when I click on answer.
//function navigate(direction)??
//propogation??
//event.listener click
function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        var question = questions[currentQuestionIndex];
       // Display the question text
        questionText.textContent = question.question; 
        // Clear previous answers
        clearInterval(answersList);

        // Create list items for each answer choice
        question.answers.forEach(function (answer) {
            var listItem = document.createElement("li");
            listItem.textContent = answer;
            listItem.addEventListener("click", function () {
                checkAnswer(answer, question.correctAnswer);
            });
            answersList.appendChild(listItem);
        });
    } else {
        endQuiz(); // If all questions are answered, end the quiz
    }
}
// WHEN I answer a question incorrectly
//if correct....else...
//click on incorrect answer

function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
        score++;
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = "Incorrect!";
        clearInterval(timeInterval);
        timer.textContent = "0";
    }

    currentQuestionIndex++;
    //need a little delay 
    //found code in stackoverflow
    setTimeout(nextQuestion, 1000);
}

// THEN time is subtracted from the clock
//else deduct time from timer
// WHEN all questions are answered or the timer reaches 0
//if time reaches zero, game over
//if all questions =complete, game over
// THEN the game is over
//game will be over
// WHEN the game is over

function endQuiz() {
    questionText.textContent = "Quiz Over!";
    clearInterval(answersList);
    clearInterval(resultText);
    score.textContent = score;
}
//if game is over
// THEN I can save my initials and my score
//save scores
//localStorage.setItem
saveScoreButton.addEventListener("click", function () {
    var initials = initialsInput.value;
    localStorage.setItem("highscore", JSON.stringify({initials, score }));
});

//button event listeners
startButton.addEventListener("click", startQuiz);