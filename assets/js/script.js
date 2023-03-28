var startButton = document.querySelector(".start")

var introSect = document.querySelector(".intro")







    startButton.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches(".start")) {
           
            var state = introSect.getAttribute("data-state");
           

            if (state === "hidden") {
             
                
            } if (state === "visible") {
               introSect.setAttribute("style", "display: none");
               
               introSect.setAttribute("data-state", "hidden");
            }

        } 
        var state = document.querySelector(".question1").getAttribute("data-state")
        if (state === "hidden") {
            document.querySelector(".question1").setAttribute("style", "display: block")
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

