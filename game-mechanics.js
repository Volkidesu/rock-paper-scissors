let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = getRandomWholeNumber(1, 4);

    switch(randomNumber.toString()) {
        case "1":
            computerChoice = "Rock";
            break;
        case "2":
            computerChoice = "Paper";
            break;
        default:
            computerChoice = "Scissor";
    }

    return computerChoice;
}

function getRandomWholeNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getPlayerChoice() {
    return (prompt("Rock, Paper or Scissors? What do you choose: ")).toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    let message = "";

    switch (playerChoice) {
        case "rock":
            if (computerChoice == "Paper") {
                message = "You lose! Paper beats Rock";
                computerScore++;
            } else if (computerChoice == "Rock") {
                message = "Draw! You both chose Rock";
            } else {
                message = "You win! Rock beats Scissors";
                playerScore++;
            }
            break;
        case "paper":
            if (computerChoice == "Paper") {
                message = "Draw! You both chose Paper";
            } else if (computerChoice == "Rock") {
                message = "You win! Paper beats Rock";
                playerScore++;
            } else {
                message = "You lose! Scissors beats Paper";
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice == "Paper") {
                message = "You win! Scissors beat Paper";
                playerScore++;
            } else if (computerChoice == "Rock") {
                message = "You lose! Rock beat Scissors";
                computerScore++;
            } else {
                message = "Draw! You both chose Scissors";
            }
            break;
        default:
            message = "Abort game! Invalid player input!";
    }
    
    return message;
}

function game() {

    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round + ": ");
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You won the game!!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game...");
    } else {
        console.log("Draw!");
    }
}


game();