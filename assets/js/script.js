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
var choicesEl = document.getElementById('choices');


//change titles to questions
var questions = [
    {
    title: "What is the correct operator to compare type and value?", 
    choices: ["==", "===", "!=", "!==="], 
    answer: "==="
},
{
    title: "How do you declare an empty array?", 
    choices: ["var array = []", "var array ='", "var array = {}", "var array = [{}]"], 
    answer: "var array = []"
}, 
{
    title: "How do you add 1 to the variable i?", 
    choices: ["i++", "i=i+1", "i+=1", "all of the above"], 
    answer: "all of the above"
},
{
    title: "_ deletes an element at the end of an array.", 
    choices: ["delete()", "push()", "pop()", "remove()"], 
    answer: "pop()"
}  
]
var questionIndex = 0;



startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startSection.classList.add("hide");
    questionSection.classList.remove("hide");

    getQuestions();
}
function getQuestions() {
    var currentQuestion = questions[questionIndex];
    console.log('currentQuestion', currentQuestion)
    titleElement.innerText = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // loop over choices
  currentQuestion.choices.forEach(function (choice, i) {
      console.log('choice', choice)
      console.log('i', i)
    // create new button for each choice
    var btn = document.createElement("button");   
    btn.setAttribute
    // attach click event listener to each choice

    // display on the page
  })
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

function endQuiz() {
    
}

//end quiz function