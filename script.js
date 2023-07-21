let playerScore = 0;
let computerScore = 0;

const buttonRocks = document.getElementById('button-rocks');
const buttonPapers = document.getElementById('button-papers');
const buttonScissors = document.getElementById('button-scissors');
const announcer =  document.getElementById('announcer');
const playerScoreBoard = document.getElementById('player-score');
const computerScoreBoard = document.getElementById('computer-score');

buttonRocks.addEventListener('click', () => {
    playRound('Rocks', getComputerChoice());
    updateScore();
});

buttonPapers.addEventListener('click', () => {
    playRound('Papers', getComputerChoice());
    updateScore();
});

buttonScissors.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
    updateScore();
});

function updateScore() {
    playerScoreBoard.textContent = playerScore;
    computerScoreBoard.textContent = computerScore;
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

    // n === 1 ? "Rock"
    // : n === 2 ? "Papers"
    // : "Scissors";
}

// function to compare both choices
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    if (playerSelection === computerSelection) { 
        announcer.textContent = "Draw"
        return
    }

    if (playerSelection === "Rocks") {
        if (computerSelection === "Papers") {
            announcer.textContent = "Lose"
            return computerScore++;
        } else if (computerSelection === "Scissors") {
            announcer.textContent = "Win"
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



// buttonRocks.addEventListener('click', playRound('Rocks', getComputerChoice));

// game();