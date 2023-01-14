/*

Create a program that plays Rock, Paper, Scissors against a computer.

Initial plan:
- Play one round
    - Prompt user for their choice for Rock, Paper, Scissors.
    - Pick a random choice for the computer.
    - Compare the choices to determine a winner.
    - Inform user of the results.

*/

//first, we prompt the user.
const moves = ["rock", "paper", "scissors"];
let playerMove = getPlayerChoice();
let computerMove = getComputerChoice();
playRound(playerMove, computerMove);

function getPlayerChoice() {
    let move = prompt("Let's play Rock, Paper, Scissors! Choose your move.").toLowerCase();
    while (!moveCheck(move)) {
        move = prompt("That's not a valid move! Pick rock, paper, or scissors.").toLowerCase();
    }
    console.log("Player chose " + move.toUpperCase());
    return move;
}

function moveCheck(move) {
    return move === "rock" || move === "paper" || move === "scissors";
}

function getComputerChoice() {
    //Pick randomly from Rock, paper, scissors.
    //return the choice.
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
    } else {
        if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                console.log("You win! Rock beats scissors!");
            } else if (computerSelection === "paper") {
                console.log("You lose! Paper beats rock!");
            }
        } else if (playerSelection === "scissors") {
            if (computerSelection === "paper") {
                console.log("You win! Scissors beats paper!");
            } else if (computerSelection === "rock") {
                console.log("You lose! Rock beats scissors!");
            }
        } else if (playerSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("You win! Paper beats rock!");
            } else if (computerSelection === "scissors") {
                console.log("You lose! Scissors beats paper!");
            }
        }
    }
}