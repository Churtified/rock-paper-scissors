let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 0) return 'rock';
    if (selection === 1) return 'paper';
    if (selection === 2) return 'scissors';
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie!');
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        console.log('You Win!');
    }
    else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        computerScore++;
        console.log('You Lose!');
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt('Make your choice!').toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log('You win the game!');
    }
    else if (playerScore < computerScore) {
        console.log('You lose the game!');
    }
    else if (playerScore === computerScore) {
        console.log('Tie game!');
    }
}