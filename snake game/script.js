const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{x: 200, y: 200}];
let direction = {x: 20, y: 0};
let food = {x: Math.floor(Math.random() * 30) * 20, y: Math.floor(Math.random() * 30) * 20};
let score = 0;
let highScore = 0;
let gameInterval;
const gridSize = 20;

// Load high score from localStorage
if (localStorage.getItem("highScore")) {
    highScore = parseInt(localStorage.getItem("highScore"));
}

// Function to draw snake
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = "white";
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

// Function to move snake
function moveSnake() {
    const newHead = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
    snake.unshift(newHead);
    
    // Check if the snake eats the food
    if (newHead.x === food.x && newHead.y === food.y) {
        score += 10;
        food = {x: Math.floor(Math.random() * 30) * 20, y: Math.floor(Math.random() * 30) * 20};
        if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
        }
    } else {
        snake.pop();
    }

    // Check if snake hits the wall or itself
    if (newHead.x < 0 || newHead.x >= canvas.width || newHead.y < 0 || newHead.y >= canvas.height || isCollide(newHead)) {
        resetGame();
    }
}

// Function to detect collisions with the snake's body
function isCollide(head) {
    return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
}

// Function to draw food
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

// Function to update the game
function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    moveSnake();
    drawSnake();
    updateScore();
}

// Function to update the score display
function updateScore() {
    document.getElementById("score").textContent = `Score: ${score} | High Score: ${highScore}`;
}

// Function to reset the game
function resetGame() {
    clearInterval(gameInterval);
    alert(`Game Over! Your Score: ${score}`);
    snake = [{x: 200, y: 200}];
    direction = {x: 20, y: 0};
    score = 0;
    startGame();
}

// Function to start the game
function startGame() {
    gameInterval = setInterval(updateGame, 100);
}

// Add touch control event listeners
document.getElementById('upBtn').addEventListener('click', () => {
    if (direction.y === 0) direction = {x: 0, y: -20};
});
document.getElementById('downBtn').addEventListener('click', () => {
    if (direction.y === 0) direction = {x: 0, y: 20};
});
document.getElementById('leftBtn').addEventListener('click', () => {
    if (direction.x === 0) direction = {x: -20, y: 0};
});
document.getElementById('rightBtn').addEventListener('click', () => {
    if (direction.x === 0) direction = {x: 20, y: 0};
});

// Control the snake with keyboard
document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp" || event.key === "w") {
        if (direction.y === 0) direction = {x: 0, y: -20};
    } else if (event.key === "ArrowDown" || event.key === "s") {
        if (direction.y === 0) direction = {x: 0, y: 20};
    } else if (event.key === "ArrowLeft" || event.key === "a") {
        if (direction.x === 0) direction = {x: -20, y: 0};
    } else if (event.key === "ArrowRight" || event.key === "d") {
        if (direction.x === 0) direction = {x: 20, y: 0};
    }
});

// Start the game initially
startGame();
