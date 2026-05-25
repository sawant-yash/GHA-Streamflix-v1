// StreamFlix V1 - Basic JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('StreamFlix V1 loaded successfully!');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 22, 40, 0.98)';
        } else {
            navbar.style.background = 'linear-gradient(180deg, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.8) 100%)';
        }
    });

    // Movie card click handler
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            alert('Playing: ' + title + '\n\nThis is a demo - Version 1');
        });
    });

    // Button click handlers
    const playBtn = document.querySelector('.btn-primary');
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            alert('Welcome to StreamFlix V1!\n\nStreaming will start shortly...');
        });
    }

    const myListBtn = document.querySelector('.btn-secondary');
    if (myListBtn) {
        myListBtn.addEventListener('click', function() {
            alert('Added to My List!\n\nFeature available in Version 1');
        });
    }
});
