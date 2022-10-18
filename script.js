const Choices = {
    ROCK: 1,
    PAPER: 2,
    SCISSORS: 3
}

function getComputerChoice(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == Choices.ROCK) {
        if(computerSelection == Choices.PAPER) {
            return "You Lose! Paper beats Rock"
        } else if(computerSelection == Choices.SCISSORS) {
            return "You won! Rock beats Scissors"
        }
    } else if (playerSelection == Choices.PAPER) {
        if(computerSelection == Choices.SCISSORS) {
            return "You Lose! Scissors beat Paper"
        } else if(computerSelection == Choices.ROCK) {
            return "You won! Paper beats Rock"
        }
    } else { // SCISSORS
        if(computerSelection == Choices.ROCK) {
            return "You Lose! Rock beats Scissors"
        } else if(computerSelection == Choices.PAPER) {
            return "You won! Scissors beat Paper"
        }
    }
    return "It's a tie!"
}

function game() {

    const num = 5;

    for (let i = 0; i < num; i++) {
        let choice = prompt("Enter 1 for Rock, 2 for Paper, and 3 for Scissors");
        alert(playRound(choice, getComputerChoice(1,3)));
    }

}

game();
 





