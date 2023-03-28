var button = document.querySelectorAll(".answer");

var section = document.querySelectorAll("section");


for (var i = 0; i < button.length; i++) {



    button[i].addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches(".answer")) {
            console.log("click")
            var state = section.getAttribute("data-state");
            console.log(state)

            if (state === "hidden") {
                element.textcontent = "";
            } else {
                document.querySelector(".intro").textcontent = "";
                document.querySelector(".intro").setAttribute("display", "none")
                document.querySelector(".intro").setAttribute("data-state", "hidden");
            }

        }
    })
}