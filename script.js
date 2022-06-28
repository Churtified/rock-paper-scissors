//game

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
        resultsDisplay.textContent = 'It\'s a tie!';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        resultsDisplay.textContent = 'You Win!';
        playerTally.textContent = `${playerScore}`;
    }
    else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        computerScore++;
        resultsDisplay.textContent = 'You Lose!';
        computerTally.textContent = `${computerScore}`;
    }
}

/*function game() {
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
} */

//ui

const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
const resultsDisplay = document.querySelector('#resultsDisplay')
const playerTally = document.querySelector('#playerTally')
const computerTally = document.querySelector('#computerTally')

rockBtn.addEventListener('click', () => startGame('rock'))
paperBtn.addEventListener('click', () => startGame('paper'))
scissorsBtn.addEventListener('click', () => startGame('scissors'))

function startGame(playerSelection) {
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}