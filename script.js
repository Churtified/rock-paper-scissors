let playerScore = 0;
let computerScore = 0;

function computerSelection {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 0) return 'rock';
    if (selection === 1) return 'paper';
    if (selection === 2) return 'scissors';
}