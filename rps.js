document.addEventListener('DOMContentLoaded', () => {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const resultMessageElement = document.getElementById('result');

    let playerPoints = 0;
    let computerPoints = 0;
    const gameOptions = ['rock', 'paper', 'scissors'];

    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');

    if (rockButton) {
        rockButton.addEventListener('click', () => playGame('rock'));
    } else {
        console.error('Rock button element not found');
    }

    if (paperButton) {
        paperButton.addEventListener('click', () => playGame('paper'));
    } else {
        console.error('Paper button element not found');
    }

    if (scissorsButton) {
        scissorsButton.addEventListener('click', () => playGame('scissors'));
    } else {
        console.error('Scissors button element not found');
    }

    function playGame(playerChoice) {
        const computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)];

        if (playerChoice === computerChoice) {
            resultMessageElement.textContent = 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerPoints++;
            playerScoreElement.textContent = playerPoints;
            resultMessageElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        } else {
            computerPoints++;
            computerScoreElement.textContent = computerPoints;
            resultMessageElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        }

        setTimeout(() => {
            resultMessageElement.textContent = '';
        }, 2000);
    }
});