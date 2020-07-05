
//Variables
var startButtonEl = document.querySelector("#startButton") ;  
var qa = document.getElementById("QA");
//var selections = document.querySelector('.selections');

//array of objects
//starts the way of any array, even though an object
//array can contain strings, numbers, objects and more...
//we use arrays so we can go through a set of data and pull stuff out
//we are always looping through arrays...for example, for loop
//if array was just strings, we might want to print to console
//if array was just numbers, we might want to print them or add them or whatever
//objects have properties on em, like an id.  
//our questions will be objects with three properties. They will have Qs, which will function as IDs
//3 types of properties
var qArray = [{
    question: "What is it called when we assign event listeners to multiple objects on the page?", 
    answer: "Event Delegation",
    selections: ["Bill","Bob","Event Delegation","Paul"]  
},

{
    question: "Why we need parent elements is related to", 
    answer: "Dom Traversal",
    selections: ["Sue","Dom Traversal","Sally","Paulie"] 
},

{
    question: "Noting that the stuff in parenthesis will be put in a string, when using GetElementByID we need the symbols to appear such that they be spoken like", 
    answer: "getElementById parenthesis variableid",
    selections: ["getElementById parenthesis hashvariableid","getElementById parenthesis dotvariableid","getElementById parenthesis variableid","hashtagextremefunvariableid"] 
}, 

{
question: "To remove a class we will use", 
answer: "dotclasslistdothide",
selections: ["Bill","dotclasslistdothide","Event Delegation","Paul"]  
},

{
question: "Is it possible to translate JQuery to Vanilla Javascript using an online resource", 
answer: "this link sort of does it https://www.geeksforgeeks.org/how-to-convert-jquery-to-javascript/",
selections: ["this link sort of does it https://www.geeksforgeeks.org/how-to-convert-jquery-to-javascript/","No","Sally","Paulie"] 
},

{
question: "A counter sort of functions like a for loop insofar as both can help us go through objects in an array, except in this quiz game the user click adds one to the counter. This is because counter is based on", 
answer: "events",
selections: ["events","automation","james","jon"] 
}, 

{
    question: "We know that creating an ID in JS allows us the option of running clearInterval. clearInterval sort of functions like a circuit breaker, cutting the action off. Is the use of the term id the same when used in something like intervalId as opposed to id in the html?", 
    answer: "differentish I think",
    selections: ["same","differentish I think","james","jon"] 
    }, 

    {
        question: "How do you call a question in this game", 
        answer: "renderQuestion paranthesis",
        selections: ["same","renderQuestion paranthesis","james","jon"] 
        },
]


var counter = 0;
var score = 0;
var timeRemaining = 60;
var timerIntervalId;
//put q from object onto page
//instead of a loop, we are doing something more controlled
//we loop through array by loading first q, then loading next q
//we tell render question it will do by counting 

//Renders current question based on counter value
function renderQuestion() {
    document.querySelector("#question").textContent = qArray[counter].question
    document.querySelector("#one").textContent = qArray[counter].selections[0]
    document.querySelector("#one").onclick=function(){
        selectionClicked(qArray[counter].selections[0])
    }
    document.querySelector("#two").textContent = qArray[counter].selections[1]
    document.querySelector("#two").onclick=function(){
        selectionClicked(qArray[counter].selections[1])
    }
    document.querySelector("#three").textContent = qArray[counter].selections[2]
    document.querySelector("#three").onclick=function(){
        selectionClicked(qArray[counter].selections[2])
    }
    document.querySelector("#four").textContent = qArray[counter].selections[3] 
    document.querySelector("#four").onclick=function(){
        selectionClicked(qArray[counter].selections[3])
    }
    qa.classList.remove("hide");
}

function selectionClicked(selection) {
    if (selection === qArray[counter].answer) {
        var correct = document.querySelector("correct")
        score++;
        alert ("CORRECT! Score: "+score);
    } else {
        alert("NOT CORRECT! Score: "+score);
    }
    counter++;
    if (counter === qArray.length) {
        endGame();
    } else {
        renderQuestion();
    }
    correct.selectionClicked();
}

var aaa = () => {
    timeRemaining--;
    document.getElementById("timer").textContent=timeRemaining;
    if (timeRemaining===0) {
        endGame();
    }    
}

function startGame(){
    timerIntervalId = setInterval(aaa, 1000);
    renderQuestion();
}

function endGame(){
    clearInterval(timerIntervalId);
    document.getElementById("QA").classList.add("hide");
    document.getElementById("endGame").innerHTML="<h1>Game over </h1><h2> Score: "+score+"</h2>";
    document.getElementById("endGame").classList.remove("hide");
    var players = localStorage.getItem("players");
    if (!players) {
        players = []
    }
    else {
        players = JSON.parse(players);
    }
    var user = prompt("what is your name");
    players.push ({name:user, score: score});
    localStorage.setItem("players", JSON.stringify(players));
    document.getElementById("scores").classList.remove("hide");
    document.getElementById("scores").textContent=JSON.stringify(players);
}

startButtonEl.onclick=startGame;

//function answerQuestion(event) {
 //   var result = document.querySelector()
//};

//selections.addEventListener('click', answerQuestion); 

/*
{
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value}`;
});

//
//EventListeners
//startButtonEl.addEventListener("click", startGame)
selections.addEventListener("click", answerQuestion)
/*document.getElementById("selections").addEventListener("click", function(event){
    console.log (event.text())
    //var userGuess = event.text 


/*
function answerQuestion(event) {
    console.log (event.text())
    //var userGuess = event.text 
}
*/
/*
var QA = document.querySelector("#QA");

QA.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("I clicked the Question and Answer section");
    if(event.target.matches("answer")) {
     alert ("yes");
      }
      else {
          alert ("no");
      }
  });
*/
//another function. Do the Event Delegation exercise. Div around all the buttons.
//When they click on that div, grab the text out to find out what it was...
/*function handClick(event) {
    if (event)
    
    
    console.log (event.srcElement.id);
    var x = event.srcElement.id
    var correct = questions[counter].answer

    if(userGuess === correct){
        console.log("yup")
        score += 5
    } else {
        console.log("incorrect")

    }

}
*/

//event.Target will be helpful -> note how it is used in delegation activity 
//set up a clickevent handler to wait on any button. Find out if the thing clicked is right or wrong.
//then 
//counter ++
//we will call the render function again
//we will do that until there are no more question
//right now render questions does not care about the number of questions...
//worry about the timer last

//Function ->making variable startGame equal a function

/*
function startGame() {
 //remove hide from QA
 //target
 document.querySelector("#QA").classList.remove("hide");
 //remove class with Javascript
 //.classList.remove("mystyle");
    //ADD hide to starter

//hide div containing starter button
//.add is basically .push. JS= weird
document.querySelector("#starter").classList.add("hide");
renderQuestion();
}
*/




//EventListeners
//startButtonEl.addEventListener("click", startGame)
//selections.addEventListener("click", answerQuestion)
/*document.getElementById("selections").addEventListener("click", function(event){
    console.log (event.text())
    //var userGuess = event.text 

  });

/*Tim's JQuery Code process (spoken)

  What is the code we have showing?
It is an array of objects:
//array of question objects
var questions = [{
         question: 'Who?',   -> this one is a string
        choices: [Tom, Bill, George...],  -> this one is an array of strings
        answer: 'George' -> this one is the answer
        }, {
            question: 'Who?',
        choices: [Tom, Bill, George...],
        answer: 'George' 
        }
        {
             question: 'Who?',
        choices: [Tom, Bill, George...],
        answer: 'George'
        }

What is the advantage of doing this as an object?




How would we handle not showing all of these at the same time?
A: you could hide them. You could create a class called hide in CSS.
Add a property to the .hide class in CSS with the display propert

.hide {
    display: none;
}

[Note: this is probably the only CSS I am going to do today
]


TK: what can the user do at this point?
all they can really do is click play and load the first question.
So, we set up an event listener for the play button. How?
$("#startBtn").on("click", function() {
    console.log('start button')
})
}


when I say anonymous function because it is not like function startGame () {}, 
we are not naming it...we are just running it and it is gone. 

An anonymous function is any function that doesn't exist in the global?
TK: it is a function we are running in that piece of code and not running anywhere else.

TK: how to we take hide class from HTTP and put on the function.
The method specifically to remove a class is removeClass

Things to Google: JQUERY How do I remove class? How do I add class?

TK: What are we doing? We are adding a class to it.
function startGame() {
    $("#start-page").addClass("hide";
    $("question-page").removeClass("hide");
    $("scores-page").removeClass("hide");
}
with the above we go from our start, to seeing our empty question


TK: This is what we have been running in this class. 
We are going to target some things on our page that already have IDs on them and we are going to change them.
Let's start by building out 

renderQuestion();

How do we get a question out of our array and put it on the screen?
Phase 1 
function renderQuestion(){
}
Phase 2
when our renderQuestion function runs, it needs to render out the first question to the page
function renderQuestion() {
            //$("#question").text() -> selecting these elements on the page  -> the vanilla way of .text is .textContent = "setvaluehere"
            //the data in text() comes from array of questions[counter] 
            // we are going to iterate over our array (not with our for loop) every time our array function by setting up a counter above the function var counter=0
            //to get the next question,
            //looks like this

    $("#question").text(questions[counter].question) 
    $("#button1").text(questions[counter].choices[0]) 
     $("#button2").text(questions[counter].choices[1]) 
    $("#button3").text(questions[counter].choices[2])  
     $("#button4").text(questions[counter].choices[3])  
}

[note -> .val and .text do similar things.]

//If I click a btn, nothing happens. What is the next step?
we need to allow them to answer, so we need to be logging the ansers.
Yeah, we are going to have an event. 

Phase 1 -> bottom of page
$('.choice').on('click',answerQuestion) -> at the bottom of page

Phase 2-> beneath the other functino
function answerQuestion() {
        console.log ('answer question ran')
}
//TK what does this function need to do?
Phase 3
function answerQuestion() {
 //TK how do I check which one they clicked?
 // in Vanilla, we were doing function answerQuestion(event) {event.text}, but the JQuery way is easier )$(this)
 //What do I want off the this button? If you peak above, we are going to use .text and call a new function .text()
 //TO store this, we need var userGuess = $(this).text(); this is one part. What do we need to compare that to? We need to compare that 
    //console.log(questions[counter].answer) -> Now when I click, I should console .log the answer
    //console.log(userGuess); -> now we have user guess. So the next step is to compare
}









Spoken: how do I know which one they answer?
before, we were going into our event and going event.text
JS + JQ
This is the Vanilla Syntax: 
function answerQuestion(event) {
    event.text
}
This is the JQuery Syntax 
$(this)

Spoken: storing value of this
function answerQuestion() {
    var userGuess = $(this).text();
    var correct =questions[counter].answer;
Spoken: how do I check if they match?
    if (userGuess === correct)
            console.log('correct'){
                score += 20

Spoken:  in CSS, can add classes of correct and incorrect, so that when clicked,
stuff changes colors. That looks like this

This
.correct {
    backgroundcolor: green;
}

.incorrect {
  background-color: red;
} 


Subsequently, we can go into the buttons in renderQuestion function
Find the button to include the class



} else {
        console.log('incorrect')
        }



}





*/


/*Tim's HTTP:
</head>
<body>
    <div id="start-page">
        <h1>Click the button to play some trivia</h1>
        <button id="startBtn">Play</button>
    </div>
    
    <div id="question-page">
        <h1 id="question"></h1>
    <div>
        <button id="button1" class="choice"></button>
        <button id="button2" class="choice"></button>
        <button id="button3" class="choice"></button>
        <button id="button4" class="choice"></button>
    </div>

    <div id="score-page">
        Scores go here
    </div>

     <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>               ></script>
    <script src="./script.js"></script>
    </body>

</html>
*/



/*
Tim's JQUERy Code As written without my comments
 




//Run this code after the document loads
$(document).ready(function() {

//Array of question objects
var questions = [{
    question: 'Who was the first US President?',
        choices: ['Thomas Edison', BIlly Madison', 'George Washington', 'Hamilton,],
    answer: 'George Washington'
},  {
    question: 'Which of these Countries is in Europe?,
    choices: ['Mexico', 'Germany', 'Somlia', 'Iraq'],
    answer: 'Germany'
},];
//tracks what question we are on
var counter = 0;

//renders current question based on counter value
function renderQuestion() {  
    $('#question').text(questions[counter].question)
    $('#button1').text(questions[counter].choices[0])
    $('#button2').text(questions[counter].choices[1])
    $('#button3').text(questions[counter].choices[2])
    $('#button4').text(questions[counter].choices[3])
}

function answerQuestion() {
var userGuess = $(this).text();
var correct = questions[counter].answer;

//Runs if user correct
if(userGuess== correct) {
    score +=10
//Runs if user incorrect
} else {
    score-= 5;
}

//Increment counter, render next question
    counter++;

    if(counter >= questions.length) {
        endGame();
    //Else, show next question
    } else { 
        renderQuestion();
    }

}

//Run when out of Questions
function endGame() {
    $(#question-page").addClass("hide");
    $(#score-page").removeClass("hide");
    $('#user-score).text("You score: " + score);

    renderQuestion();
}


//Call startGame when clicked
//not startGame(), not called till you click
$("#startBtn").on("click", startGame)

//Call when answer choice is clicked
$(".choice").on("click", answerQuestion)
*/

/*
Tim's JQUERy Code As written with my comments
 




//Run this code after the document loads
$(document).ready(function() {

//Array of question objects
var questions = [{
    question: 'Who was the first US President?',
        choices: ['Thomas Edison', BIlly Madison', 'George Washington', 'Hamilton,],
    answer: 'George Washington'
},  {
    question: 'Which of these Countries is in Europe?,
    choices: ['Mexico', 'Germany', 'Somlia', 'Iraq'],
    answer: 'Germany'
},];
//tracks what question we are on
var counter = 0;

//renders current question based on counter value
function renderQuestion() {  
    $('#question').text(questions[counter].question)
    $('#button1').text(questions[counter].choices[0])
    $('#button2').text(questions[counter].choices[1])
    $('#button3').text(questions[counter].choices[2])
    $('#button4').text(questions[counter].choices[3])
}

function answerQuestion() {
var userGuess = $(this).text();
var correct = questions[counter].answer;

//Runs if user correct
if(userGuess== correct) {
    score +=10
//Runs if user incorrect
} else {
    score-= 5;
}

//Increment counter, render next question
    counter++;

    if(counter >= questions.length) {
        endGame();
    //Else, show next question
    } else { 
        renderQuestion();
    }

}

//Run when out of Questions
function endGame() {
    $(#question-page").addClass("hide");
    $(#score-page").removeClass("hide");
    $('#user-score).text("You score: " + score);

    renderQuestion();
}


//Call startGame when clicked
//not startGame(), not called till you click
$("#startBtn").on("click", startGame)

//Call when answer choice is clicked
$(".choice").on("click", answerQuestion)
*/