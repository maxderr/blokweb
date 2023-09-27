console.log ("test")

hamburgerSectie = document.querySelector(".hamburgerSectie");
hamburgerButton = document.querySelector(".hamburgerButton");

hamburgerButton.onclick = hamburgerUitklappen;

function hamburgerUitklappen(){
    hamburgerSectie.classList.toggle("hamburgerUitgeklapt");
}