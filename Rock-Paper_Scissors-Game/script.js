const result = document.getElementById("result");
const Player = document.getElementById("Ps");
const Computer = document.getElementById("Cs");

let Choices = ["Rock", "Paper", "Scissors"];

function playGame(input) {
    let Comp = Choices[Math.floor(Math.random() * 3)];
    console.log("Computer: "+ Comp);
    console.log("User: "+ input);

    let Result = "";

    if(input == Comp){
        Result = "It's a Tie!";
    } else {
        switch(input) {
            case "Rock":
                Result = (Comp === "Scissors") ? "Player Wins!" : "Computer Wins!";
                break;
            case "Paper":
                Result = (Comp === "Rock") ? "Player Wins!" : "Computer Wins!";
                break;
            case "Scissors":
                Result = (Comp === "Paper") ? "Player Wins!" : "Computer Wins!";
                break;
        }
    }

    console.log(Result);

    Player.textContent = "Player: " + input;
    Computer.textContent = "Computer: " + Comp;
    result.textContent = Result;
    setTimeout(() => {
        console.clear();
    }, 4000);
}