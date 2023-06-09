var startButton = document.querySelector(".start")
var q1Button = document.querySelectorAll(".q1")
var q2Button = document.querySelectorAll(".q2")
var q3Button = document.querySelectorAll(".q3")
var q4Button = document.querySelectorAll(".q4")
var submitButton = document.querySelector(".submit")
var restartButton = document.querySelector(".restart")
var introSect = document.querySelector(".intro")
var timeEl = document.querySelector(".timer")
var secondsLeft = 60

function startGame() {
//listen for start button and reveal first question plus start timer
startButton.addEventListener("click", function (event) {
    var element = event.target;
    console.log("click test")
    if (element.matches(".start")) {

        
  // Sets interval in variable
  var timerInterval = setInterval(function() {
  
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";
    console.log(secondsLeft)
    
    //stop timer if quiz is completed
    var finish = document.querySelector(".question5")
    var dataState = finish.getAttribute("style", "display")
    console.log(dataState)
    if (dataState === "display: block") {
        clearInterval(timerInterval);
        //add score as value to final score section in HTML
        var score = secondsLeft;
        console.log(score);
        document.querySelector(".score").textContent = score

        localStorage.setItem("score", score)
    }
    
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // bring user directly to final prompt "time is up"
      
        var q = document.querySelectorAll("section")
        var element = event.target;
        console.log("click test")
        if (element.matches(".q1Button") || element.matches(".q2Button") || element.matches(".q3Button") || element.matches(".q4Button")){
    
            var state = q.getAttribute("data-state");
    
    
            if (state === "hidden") {
    
    
            } if (state === "visible") {
                q.setAttribute("style", "display: none");
    
                q.setAttribute("data-state", "hidden");
            }
    
        }
        var state = document.querySelector(".question5").getAttribute("data-state")
        if (state === "hidden") {
            document.querySelector(".question5").setAttribute("style", "display: block");
            document.querySelector(".question5").setAttribute("data-state", "visible");
        }

      
    }

  }, 1000);

    var state = introSect.getAttribute("data-state");


        if (state === "hidden") {


        } if (state === "visible") {
            introSect.setAttribute("style", "display: none");

            introSect.setAttribute("data-state", "hidden");
        }

    }
    var state = document.querySelector(".question1").getAttribute("data-state");
    if (state === "hidden") {
        document.querySelector(".question1").setAttribute("style", "display: block");
        document.querySelector(".question1").setAttribute("data-state", "visible");
    }

})






//listen for answer button click, hide first question, reveal second question.
for (i = 0; i < q1Button.length; i++) {
q1Button[i].addEventListener("click", function (event) {
    var q = document.querySelector(".question1")
    var element = event.target;
    console.log("click test")
    if (element.matches(".q1") && !element.matches("#correct-answer-1")) {

        var state = q.getAttribute("data-state");
        secondsLeft = secondsLeft - 10;
        if (state === "hidden") {


        } if (state === "visible") {
            q.setAttribute("style", "display: none");

            q.setAttribute("data-state", "hidden");
        }
        var state = document.querySelector(".question2").getAttribute("data-state")
        if (state === "hidden") {
            document.querySelector(".question2").setAttribute("style", "display: block");
            document.querySelector(".question2").setAttribute("data-state", "visible");

    }} else if (element.matches("#correct-answer-1")){
        var state = q.getAttribute("data-state");


        if (state === "hidden") {


        } if (state === "visible") {
            q.setAttribute("style", "display: none");

            q.setAttribute("data-state", "hidden");
        }

    }
    var state = document.querySelector(".question2").getAttribute("data-state")
    if (state === "hidden") {
        document.querySelector(".question2").setAttribute("style", "display: block");
        document.querySelector(".question2").setAttribute("data-state", "visible");
    }

})}

//listen for answer button click, hide second question, reveal third question.
for (i = 0; i < q2Button.length; i++) {
    q2Button[i].addEventListener("click", function (event) {
        var q = document.querySelector(".question2")
        var element = event.target;
        console.log("click test")
        if (element.matches(".q2") && !element.matches("#correct-answer-2")) {
    
            var state = q.getAttribute("data-state");
            secondsLeft = secondsLeft - 10;
            if (state === "hidden") {
    
    
            } if (state === "visible") {
                q.setAttribute("style", "display: none");
    
                q.setAttribute("data-state", "hidden");
            }
            var state = document.querySelector(".question3").getAttribute("data-state")
            if (state === "hidden") {
                document.querySelector(".question3").setAttribute("style", "display: block");
                document.querySelector(".question3").setAttribute("data-state", "visible");
    
        }} else if (element.matches("#correct-answer-2")){
            var state = q.getAttribute("data-state");
    
    
            if (state === "hidden") {
    
    
            } if (state === "visible") {
                q.setAttribute("style", "display: none");
    
                q.setAttribute("data-state", "hidden");
            }
    
        }
        var state = document.querySelector(".question3").getAttribute("data-state")
        if (state === "hidden") {
            document.querySelector(".question3").setAttribute("style", "display: block");
            document.querySelector(".question3").setAttribute("data-state", "visible");
        }
    
    })}

//listen for answer button click, hide third question, reveal fourth question.
for (i = 0; i < q3Button.length; i++) {
    q3Button[i].addEventListener("click", function (event) {
        var q = document.querySelector(".question3")
        var element = event.target;
        console.log("click test")
        if (element.matches(".q3") && !element.matches("#correct-answer-3")) {
    
            var state = q.getAttribute("data-state");
            secondsLeft = secondsLeft - 10;
            if (state === "hidden") {
    
    
            } if (state === "visible") {
                q.setAttribute("style", "display: none");
    
                q.setAttribute("data-state", "hidden");
            }
            var state = document.querySelector(".question4").getAttribute("data-state")
            if (state === "hidden") {
                document.querySelector(".question4").setAttribute("style", "display: block");
                document.querySelector(".question4").setAttribute("data-state", "visible");
    
        }} else if (element.matches("#correct-answer-3")){
            var state = q.getAttribute("data-state");
    
    
            if (state === "hidden") {
    
    
            } if (state === "visible") {
                q.setAttribute("style", "display: none");
    
                q.setAttribute("data-state", "hidden");
            }
    
        }
        var state = document.querySelector(".question4").getAttribute("data-state")
        if (state === "hidden") {
            document.querySelector(".question4").setAttribute("style", "display: block");
            document.querySelector(".question4").setAttribute("data-state", "visible");
        }
    
    })}

//listen for answer button click, hide fourth question, reveal final score prompt.
for (i = 0; i < q4Button.length; i++) {
    q4Button[i].addEventListener("click", function (event) {
        var q = document.querySelector(".question4")
        var element = event.target;
        console.log("click test")
        if (element.matches(".q4") && !element.matches("#correct-answer-4")) {
    
            var state = q.getAttribute("data-state");
            secondsLeft = secondsLeft - 10;
            if (state === "hidden") {
    
    
            } if (state === "visible") {
                q.setAttribute("style", "display: none");
    
                q.setAttribute("data-state", "hidden");
            }
            var state = document.querySelector(".question5").getAttribute("data-state")
            if (state === "hidden") {
                document.querySelector(".question5").setAttribute("style", "display: block");
                document.querySelector(".question5").setAttribute("data-state", "visible");
    
        }} else if (element.matches("#correct-answer-4")){
            var state = q.getAttribute("data-state");
    
    
            if (state === "hidden") {
    
    
            } if (state === "visible") {
                q.setAttribute("style", "display: none");
    
                q.setAttribute("data-state", "hidden");
            }
    
        }
        var state = document.querySelector(".question5").getAttribute("data-state")
        if (state === "hidden") {
            document.querySelector(".question5").setAttribute("style", "display: block");
            document.querySelector(".question5").setAttribute("data-state", "visible");
        }
    
    })}

submitButton.addEventListener("click", function (event) {
    var q = document.querySelector(".question5")
    var element = event.target;
    console.log("click test")
    if (element.matches(".submit")) {

        var state = q.getAttribute("data-state");


        if (state === "hidden") {


        } if (state === "visible") {
            q.setAttribute("style", "display: none");

            q.setAttribute("data-state", "hidden");
        }

    }
    var state = document.querySelector(".question6").getAttribute("data-state")
    if (state === "hidden") {
        document.querySelector(".question6").setAttribute("style", "display: block");
        document.querySelector(".question6").setAttribute("data-state", "visible");
        var lastScore = localStorage.getItem("score");
        document.querySelector(".question6").children[1].textContent = lastScore
        console.log(document.querySelector(".question6").children[1])
        
}})} 
startGame ()
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score

