/*

Create a program that plays Rock, Paper, Scissors against a computer.

Initial plan:
- Play one round
    - Prompt user for their choice for Rock, Paper, Scissors.
    - Pick a random choice for the computer.
    - Compare the choices to determine a winner.
    - Inform user of the results.

*/

const moves = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 1;
let playerMove, computerMove, winner;

//game loop, 5 rounds
while (round <= 5) {
    if (round > 1) {
        console.log("Let's play another round!");
    }
    playerMove = getPlayerChoice();
    computerMove = getComputerChoice();
    winner = playRound(playerMove, computerMove);
    switch(winner) {
        case 0:
            computerScore++;
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            draw++;
            break;
        default:
            console.log("Error, something went wrong.")
    }
    console.log("Player: " + playerScore + " Computer: " + computerScore + " Draws: " + draw);
    round++;
}

//Game end prompt
console.log("Game over!")

if (playerScore > computerScore) {
    console.log("You won!!");
} else if (playerScore === computerScore) {
    console.log("It's a tie!!");
} else {
    console.log("Computer wins!!");
}

//Checks if player picked a valid move
function getPlayerChoice() {
    let move = prompt("Let's play Rock, Paper, Scissors! Choose your move.").toLowerCase();
    while (!moveCheck(move)) {
        move = prompt("That's not a valid move! Pick rock, paper, or scissors.").toLowerCase();
    }
    console.log("Player chose " + move.toUpperCase());
    return move;
}

//helper function for getPlayerChoice
function moveCheck(move) {
    return move === "rock" || move === "paper" || move === "scissors";
}

//returns computer's move
function getComputerChoice() {
    let move = moves[Math.floor(Math.random() * (moves.length - 1))];
    console.log("Computer chose " + move.toUpperCase());
    return move;
}

function playRound(playerSelection, computerSelection) {
    //if values are equal, then it is a tie.
    //if rock
        //loses to paper
        //wins against scissors
    //if scissors
        //loses to rock
        //wins against paper
    //if paper
        //loses to scissors
        //wins against rock
    //return if player won or lost against computer.
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        return 2;
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                console.log("You win! Rock beats scissors!");
                return 1;
            } else if (computerSelection === "paper") {
                console.log("You lose! Paper beats rock!");
                return 0;
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                console.log("You win! Scissors beats paper!");
                return 1;
            } else if (computerSelection === "rock") {
                console.log("You lose! Rock beats scissors!");
                return 0;
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("You win! Paper beats rock!");
                return 1;
            } else if (computerSelection === "scissors") {
                console.log("You lose! Scissors beats paper!");
                return 0;
            }
        }
    }
}