// Step 4: Declare the player's score variables
let humanScore = 0;
let computerScore = 0;

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    const choice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
    return choice;
}

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

// Step 6: Write the logic to play the entire game
function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You lost the game! The computer won with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();