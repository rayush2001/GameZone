// Initialize score variables
let userScore = 0;
let compScore = 0;

// Choices array
const itemList = ["Rock", "Paper", "Scissor"];

// Get DOM elements
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const exitBtn = document.getElementById("exit-btn");

// Function to display the result message
function displayMessage(message) {
    messageEl.textContent = message;
}

// Function to update the score display
function updateScore() {
    scoreEl.textContent = `User: ${userScore} | Computer: ${compScore}`;
}

// Function to play the game
function playGame(userChoice) {
    const compChoice = itemList[Math.floor(Math.random() * itemList.length)];

    if (userChoice === compChoice) {
        displayMessage(`Both chose ${userChoice}. It's a tie!`);
    } else if (userChoice === "Rock") {
        if (compChoice === "Paper") {
            displayMessage("Paper covers Rock, Computer wins!");
            compScore += 1;
        } else {
            displayMessage("Rock smashes Scissor, You won!");
            userScore += 1;
        }
    } else if (userChoice === "Paper") {
        if (compChoice === "Scissor") {
            displayMessage("Scissor cuts Paper, Computer wins!");
            compScore += 1;
        } else {
            displayMessage("Paper covers Rock, You won!");
            userScore += 1;
        }
    } else if (userChoice === "Scissor") {
        if (compChoice === "Rock") {
            displayMessage("Rock smashes Scissor, Computer wins!");
            compScore += 1;
        } else {
            displayMessage("Scissor cuts Paper, You won!");
            userScore += 1;
        }
    }

    // Update the score after each round
    updateScore();
}

// Event listeners for user choices
rockBtn.addEventListener("click", () => playGame("Rock"));
paperBtn.addEventListener("click", () => playGame("Paper"));
scissorBtn.addEventListener("click", () => playGame("Scissor"));

// Exit game functionality
exitBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to exit the game?")) {
        window.close(); // Won't work on some browsers
    }
});

// Initial score display
updateScore();
