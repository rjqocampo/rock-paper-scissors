const announcer =  document.getElementById('announcer');
const playerScoreBoard = document.getElementById('player-score');
const computerScoreBoard = document.getElementById('computer-score');
const buttonsHideContainer = document.getElementById('buttons-hide-container');
const winHideContainer = document.getElementById('win-hide-container');
const loseHideContainer = document.getElementById('lose-hide-container');
const buttonPlayAgain = document.querySelectorAll('.button-play-again');
const textRoundCounter = document.getElementById('text-round')
const buttonsSelect = document.querySelectorAll('.button-choices');
const textResults = document.getElementById('text-results');
const playerImage = document.getElementById('player-image');
const computerImage = document.getElementById('computer-image');

let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;

buttonsSelect.forEach((button) => { // loop through 3 button choices and get data key from HTML
    let playerChoice = button.getAttribute('data-key');
    button.addEventListener('click', () => {
        updateRoundResult(playRound(playerChoice, getComputerChoice()));
        updateScore();
        checkWinner();
    })
})

buttonPlayAgain.forEach(button => { // event listener for both play again buttons that resets score
    button.addEventListener('click', () => {
        playAgain();
        updateScore();
    })
});

function updateRoundResult(result) {
    textResults.textContent = result;
}

function playAgain() { // resets numbers and toggle correct UI for playing
    playerScore = 0;
    computerScore = 0;
    roundCounter = 0;
    playerImage.setAttribute('src', `./img/Rocks.png`);
    updateScore();
    buttonsHideContainer.className = ""
    winHideContainer.className = "hide";
    loseHideContainer.className = "hide";
}

function checkWinner() { // checks winner then toggles appropriate UI
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

function getComputerChoice() { // function for a random number generator
    let n = Math.floor(Math.random() * 3) + 1

    if (n === 1) {
        return "Rocks";
    } else if (n === 2) {
        return "Papers";
    } else {
        return "Scissors";
    }
}

function updateImage(playerSelection, computerSelection) {
    playerImage.setAttribute('src', `./img/${playerSelection}.png`);
    computerImage.setAttribute('src', `./img/${computerSelection}.png`);
}

// function to compare both choices
function playRound(playerSelection, computerSelection) {
    updateImage(playerSelection, computerSelection);
    addRound();
    if (playerSelection === computerSelection) { 
        return "draw"
    }

    if (playerSelection === "Rocks") {
        if (computerSelection === "Papers") {
            computerScore++;
            return "lose";
        } else if (computerSelection === "Scissors") {
            playerScore++;
            return "win"
        }
    }

    if (playerSelection === "Papers") {
        if (computerSelection === "Rocks") {
            playerScore++;
            return "win";
        } else if (computerSelection === "Scissors") {
            computerScore++;
            return "lose"
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rocks") {
            computerScore++;
            return "lose";
        } else if (computerSelection === "Papers") {
            playerScore++;
            return "win";
        }
    }
}