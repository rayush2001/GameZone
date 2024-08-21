const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

 // Search Functionality
 function searchGame() {
    const searchTerm = document.getElementById('search-bar').value;
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = `Results for "${searchTerm}":`;

    // Show game results based on search term
    const gameNames = ['Rock Paper Scissor', 'Snake game', 'Pong Game'];
    const matchingGames = gameNames.filter(game => game.toLowerCase().includes(searchTerm.toLowerCase()));

    searchResults.innerHTML += matchingGames.length > 0 ? matchingGames.join(', ') : 'No games found.';
}


