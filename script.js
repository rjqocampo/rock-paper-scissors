// function to check if input is empty or invalid. if correct input, make it case insensitive
function parseInput (input) {
    let letter = input.charAt(0)
    let word = letter.toUpperCase() + input.slice(1).toLowerCase();

    if (word === "") {
        alert("Kindly choose between Rocks, Papers and Scissors.")
    } else if (word === "Rocks" || word === "Papers" || word === "Scissors") {
        return word;
    } else {
        alert("You provided an invalid input.")
    }
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
    if (playerSelection === computerSelection) { 
        console.log("Draw!")
        return "draw"
    }

    if (playerSelection === "Rocks") {
        if (computerSelection === "Papers") {
            console.log("You lose! Opponent gets 1 point.")
            return "lose"
        } else if (computerSelection === "Scissors") {
            console.log("You win! You get 1 point.")
            return "win"
        }
    }

    if (playerSelection === "Papers") {
        if (computerSelection === "Rocks") {
            console.log("You win! You get 1 point.")
            return "win"
        } else if (computerSelection === "Scissors") {
            console.log("You lose! Opponent gets 1 point.")
            return "lose"
        }
    }

    if (playerSelection === "Scissors") {
        if (computerSelection === "Rocks") {
            console.log("You lose! Opponent gets 1 point.") 
            return "lose"
        } else if (computerSelection === "Papers") {
            console.log("You win! You get 1 point.")
            return "win"
        }
    }
}

// function to run games 5 times and determine who wins after
function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let input = prompt("Rocks, Papers, Scissors?!")
        let playerSelection = parseInput(input)
        let computerSelection = getComputerChoice()
        console.log(playerSelection + " VS " + computerSelection)

        if (playRound(playerSelection, computerSelection) === "win") {
            userScore++;
            console.log(`Round ${i}. SCORE: ${userScore}:${computerScore}`)
        } else if (playRound(playerSelection, computerSelection) === "lose") {
            computerScore++
            console.log(`Round ${i}. SCORE: ${userScore}:${computerScore}`)
        } else {
            console.log(`Round ${i}. SCORE: ${userScore}:${computerScore}`)
        }

        if (i === 5) {
            if (userScore > computerScore) {
                alert("YOU'VE WON THE GAME!")
                console.log("YOU'VE WON THE GAME!")
            } else if (userScore === computerScore) {
                alert("THE GAME IS A DRAW!")
                console.log("THE GAME IS A DRAW!")
            } else {
                alert("YOU'VE LOST THE GAME!")
                console.log("YOU'VE LOST THE GAME!")
            }
        }
    }
}

game();