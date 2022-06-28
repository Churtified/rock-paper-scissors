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
        resultsDisplay.textContent = 'Round Result = It\'s a tie!';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        resultsDisplay.textContent = 'Round Result = You Win!';
        playerTally.textContent = `${playerScore}`;
    }
    else if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors')
    ) {
        computerScore++;
        resultsDisplay.textContent = 'Round Result = You Lose!';
        computerTally.textContent = `${computerScore}`;
    }
}

//ui

const rockBtn = document.querySelector('#rockBtn')
const paperBtn = document.querySelector('#paperBtn')
const scissorsBtn = document.querySelector('#scissorsBtn')
const resultsDisplay = document.querySelector('#resultsDisplay')
const playerTally = document.querySelector('#playerTally')
const computerTally = document.querySelector('#computerTally')
const announceWinner = document.querySelector('#announceWinner')

rockBtn.addEventListener('click', () => game('rock'))
paperBtn.addEventListener('click', () => game('paper'))
scissorsBtn.addEventListener('click', () => game('scissors'))

function game(playerSelection) {
    announceWinner.textContent = '';
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (finishGame()) {
        if (playerScore === 5) {
            announceWinner.textContent = 'You Win the first to 5! Make another selection to play another game.';
        }
        else if (computerScore === 5) {
            announceWinner.textContent = 'You Lose the first to 5! Make another selection to play another game.';
        }
        playerScore = 0;
        computerScore = 0;
        playerTally.textContent = `${playerScore}`;
        computerTally.textContent = `${computerScore}`;
    }
}

function finishGame() {
    if (playerScore === 5 || computerScore === 5) {
        return true;
    }
}