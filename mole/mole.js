let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;
let moleInterval = 1000;
let plantInterval = 2000;

window.onload = function() {
    alert("Welcome to Whac-a-Mole! Beware of the piranha plants!");
    setGame();
}

function setGame() {
    // Create the grid
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    
    setIntervals();
}

function setIntervals() {
    setInterval(setMole, moleInterval); 
    setInterval(setPlant, plantInterval);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) return;
    if (currMoleTile) currMoleTile.innerHTML = "";
    
    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";
    
    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id == num) return;
    
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) return;
    if (currPlantTile) currPlantTile.innerHTML = "";
    
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";
    
    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) return;
    
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) return;
    
    if (this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
        
        if (score > 90) {
            // Increase difficulty
            moleInterval = 700;  // Speed up mole appearance
            plantInterval = 1500;  // Decrease time between plant spawns
            clearInterval(moleTimer);
            clearInterval(plantTimer);
            setIntervals();
        }
    }
    else if (this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
