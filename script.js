let input = prompt("Rock, Papers, Scissors?!")
let computerSelection = getComputerChoice()
let playerSelection = parseInput(input)
let userScore;
let computerScore;

// function to check if input is empty or invalid. if correct input, make it case insensitive
function parseInput () {
    let letter = input.charAt(0)
    let word = letter.toUpperCase() + input.slice(1).toLowerCase();

    if (word === "") {
        alert("Kindly choose between Rocks, Papers and Scissors.")
    } else if (word === "Rock" || word === "Papers" || word === "Scissors") {
        return word;
    } else {
        alert("You provided an invalid input.")
    }
}

// function for a random number generator then assigns respectively if 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3) + 1

    if (n === 1) {
        return "Rock";
    } else if (n === 2) {
        return "Papers";
    } else {
        return "Scissors";
    }

    // n === 1 ? "Rock"
    // : n === 2 ? "Papers"
    // : "Scissors";
}

// function to compare both inputs and add a score to the winner
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " VS " + computerSelection)
    if (playerSelection === computerSelection) { 
        console.log("Draw!")
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Papers") {
            console.log("You lose! Opponent gets 1 point.")
            return computerScore++;
            
        } else if (computerSelection === "Scissors") {
            console.log("You win! You get 1 point.")
            return userScore++;
        }
    }

    if (playerSelection === "Papers") {
        if (computerSelection === "Rock") {
            console.log("You win! You get 1 point.")
            return userScore++;
        } else if (computerSelection === "Scissors") {
            console.log("You lose! Opponent gets 1 point.")
            return computerScore++;
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            console.log("You lose! Opponent gets 1 point.") 
            return computerScore++;
        } else if (computerSelection === "Papers") {
            console.log("You win! You get 1 point.")
            return userScore++;
        }
    }
}

function game() {
    userScore = 0;
    computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}. SCORE: ${userScore}:${computerScore}`)

        playRound(playerSelection, computerSelection)
    }
}

game();