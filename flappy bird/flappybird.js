window.onload = function() {
    const canvas = document.getElementById('board');
    const context = canvas.getContext('2d');
    
    // Set canvas dimensions for PC and mobile
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let isFlying = false;

    // Function to make the bird fly
    function fly() {
        isFlying = true;
        // Add logic to move the bird upward
        // bird.y -= someValue; 
    }

    // Event listeners for PC
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space') {
            fly();
        }
    });

    document.addEventListener('click', function() {
        fly();
    });

    // Event listeners for mobile
    document.addEventListener('touchstart', function() {
        fly();
    });

    // Main game loop
    function gameLoop() {
        // Update game state and render game
        if (isFlying) {
            // Move bird upward
        }
        
        requestAnimationFrame(gameLoop);
    }

    gameLoop();
};
