//inputs we need: questions array, question index, timer object, and a high score object (from local storage & save back)

//three events: one for the start button, one for the choice buttons (shared with all 4), one for the submit button - each of these should have functions
    //start button should have start button function -- also call the start timer function & the get question function
        //find the id of div section "start" section & then add a class to that section of "hide"
        //find the id of the question section & remove the class of hide
    //check answer function -- attached to choice event
    //submit score function -- tied to the submit 

//need at least 3 functions: one to start the timer, one function to get the questions, end quiz function
    //inside: logic that if you run out of time, it will call the end quiz function
    //on end game function: add the class of hide to the question section & then remove the hide of the end section

var startButton = document.getElementById("start-button");
var startSection = document.getElementById("start");
var questionSection = document.getElementById("questions");
var endSection = document.getElementById("end");
var titleElement = document.getElementById("title");
var choiceButton1 = document.getElementById("choice-1");
var choiceButton2 = document.getElementById("choice-2");
var choiceButton3 = document.getElementById("choice-3");
var choiceButton4 = document.getElementById("choice-4");

var questions = [
    {
    title: "question 1", 
    choices: ["choice 1", "choice 2", "choice 3", "choice 4"], 
    answer: "choice 2"
},
{
    title: "question 2", 
    choices: ["choice 1", "choice 2", "choice 3", "choice 4"], 
    answer: "choice 3"
}, 
{
    title: "question 3", 
    choices: ["choice 1", "choice 2", "choice 3", "choice 4"], 
    answer: "choice 4"
},
{
    title: "question 4", 
    choices: ["choice 1", "choice 2", "choice 3", "choice 4"], 
    answer: "choice 1"
}  
]
var questionIndex = 0;



startButton.addEventListener("click", startQuiz);
choiceButton1.addEventListener("click", checkAnswer);
choiceButton2.addEventListener("click", checkAnswer);
choiceButton3.addEventListener("click", checkAnswer);
choiceButton4.addEventListener("click", checkAnswer);

function startQuiz() {
    startSection.classList.add("hide");
    questionSection.classList.remove("hide");

    getQuestions();
}
function getQuestions() {
    var currentQuestion = questions[questionIndex];
    titleElement.innerText = currentQuestion.title;
    choiceButton1.innerText = currentQuestion.choices[0];
    choiceButton2.innerText = currentQuestion.choices[1];
    choiceButton3.innerText = currentQuestion.choices[2];
    choiceButton4.innerText = currentQuestion.choices[3];
}
function checkAnswer(event) {
    var userChoice = event.target.innerText;
    if(userChoice===questions[questionIndex].answer)
        alert("correct")
    else
        alert("incorrect")

    questionIndex++;
    if(questionIndex < questions.length)
        getQuestions()
    else
        alert("end quiz")
    //call the end function
} 

//end quiz function