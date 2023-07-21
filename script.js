let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;

const buttonRocks = document.getElementById('button-rocks');
const buttonPapers = document.getElementById('button-papers');
const buttonScissors = document.getElementById('button-scissors');
const announcer =  document.getElementById('announcer');
const playerScoreBoard = document.getElementById('player-score');
const computerScoreBoard = document.getElementById('computer-score');
const buttonsHideContainer = document.getElementById('buttons-hide-container');
const winHideContainer = document.getElementById('win-hide-container');
const loseHideContainer = document.getElementById('lose-hide-container');
const buttonPlayAgain = document.querySelectorAll('.button-play-again');
const textRoundCounter = document.getElementById('text-round')

buttonRocks.addEventListener('click', () => {
    playRound('Rocks', getComputerChoice());
    updateScore();
    checkWinner()
});

buttonPapers.addEventListener('click', () => {
    playRound('Papers', getComputerChoice());
    updateScore();
    checkWinner()
});

buttonScissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
    updateScore();
    checkWinner()
});

buttonPlayAgain.forEach(button => { // event listener for both play again buttons that resets score
    button.addEventListener('click', () => {
        playAgain();
        updateScore();
    })
});

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    updateScore();
    buttonsHideContainer.className = ""
    winHideContainer.className = "hide";
    loseHideContainer.className = "hide";
}

function checkWinner() { // checks winner then modies the UI presented
    if (playerScore === 5) {
        buttonsHideContainer.className = "hide"
        winHideContainer.className = "";
    } else if (computerScore === 5) {
        buttonsHideContainer.className = "hide"
        loseHideContainer.className = "";
    }
}

function updateScore() {
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
    if (playerScore < 5 && computerScore < 5) {
        textRoundCounter.textContent = `ROUND ${roundCounter}`;
    }
}

function addRound() {
    roundCounter++;
}

// function for a random number generator then assigns respectively if 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1

    if (n === 1) {
        return "Rocks";
    } else if (n === 2) {
        return "Papers";
    } else {
        return "Scissors";
    }
}

// function to compare both choices
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    addRound();
    if (playerSelection === computerSelection) { 
        return
    }

    if (playerSelection === "Rocks") {
        if (computerSelection === "Papers") {
            return computerScore++;
        } else if (computerSelection === "Scissors") {
            return playerScore++;
        }
    }

    if (playerSelection === "Papers") {
        if (computerSelection === "Rocks") {
            return playerScore++;
        } else if (computerSelection === "Scissors") {
            return computerScore++;
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rocks") {
            return computerScore++;
        } else if (computerSelection === "Papers") {
            return playerScore++;
        }
    }
}