const pick = ["rock", "paper", "scissors"];
const player = document.getElementById("player")
const computer = document.getElementById("computer")
const result = document.getElementById("result")


function play(choice){
    const comp = pick[Math.floor(Math.random()*3)]


    let resultText = "";

    if (choice === comp){
        resultText = "It is a TIE";
    }
    else{
        switch(choice){
            case "rock" :
                resultText = (comp === "scissors") ? "You win!" : "You lose :("
                break;
            case "paper" :
                resultText = (comp === "rock") ? "You win!" : "You lose :("
                break;
            case "scissors" :
                resultText = (comp === "paper") ? "You win!" : "You lose :("
                break;
        }
    console.log(result);
    }

    player.textContent = `You chose: ${choice}`;
    computer.textContent = `The computer chose: ${comp}`;
    result.textContent = resultText;

}


