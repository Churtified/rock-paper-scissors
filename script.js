let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;

function computerPlay() {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 0) {
        return ('rock');
    }
    else if (selection === 1) {
        return ('paper');
    }
    else if (selection === 2) {
        return ('scissors');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log('You Win! Rock beats Scissors');
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log('You Lose! Paper beats Rock');
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log('You Win! Paper beats Rock');
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        console.log('You Lose! Paper beats Scissors');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log('You Win! Scissors beats Paper');
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log('You Lose! Rock beats Scissors');
    }
    else {
        console.log('Tie!');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Please enter your selection").toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        console.log('You win the best of 5!');
    }
    else if (playerScore < computerScore) {
        console.log('You lose the best of 5!');
    }
    else {
        console.log('It\'s a draw!');
    }
}