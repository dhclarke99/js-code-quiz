var startButton = document.querySelector(".start")
var q1Button = document.querySelectorAll(".q1")
var q2Button = document.querySelectorAll(".q2")
var q3Button = document.querySelectorAll(".q3")
var q4Button = document.querySelectorAll(".q4")
var submitButton = document.querySelector(".submit")
var restartButton = document.querySelector(".restart")
var introSect = document.querySelector(".intro")


//listen for start button and start timer. reveal first question
startButton.addEventListener("click", function (event) {
    var element = event.target;
    console.log("click test")
    if (element.matches(".start")) {

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



//listen for answer button click and reveal second question
for (i = 0; i < q1Button.length; i++) {
q1Button[i].addEventListener("click", function (event) {
    var q = document.querySelector(".question1")
    var element = event.target;
    console.log("click test")
    if (element.matches(".q1")) {

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

for (i = 0; i < q2Button.length; i++) {
q2Button[i].addEventListener("click", function (event) {
    var q = document.querySelector(".question2")
    var element = event.target;
    console.log("click test")
    if (element.matches(".q2")) {

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

for (i = 0; i < q3Button.length; i++) {
q3Button[i].addEventListener("click", function (event) {
    var q = document.querySelector(".question3")
    var element = event.target;
    console.log("click test")
    if (element.matches(".q3")) {

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

for (i = 0; i < q4Button.length; i++) {
q4Button[1].addEventListener("click", function (event) {
    var q = document.querySelector(".question4")
    var element = event.target;
    console.log("click test")
    if (element.matches(".q4")) {

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
    }

})


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

