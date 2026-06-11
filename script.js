const gameContainer = document.getElementById('gameContainer');
const buttons = document.querySelectorAll('.quiz-btn');

let currentQuestion = 0;
const totalQuestions = 14;

// Preload images to avoid flickering
const preloadedImages = [];
for (let i = 0; i < totalQuestions; i++) {
    const img = new Image();
    img.src = `Images/${i}.jpg`;
    preloadedImages.push(img);
}

function updateView() {
    gameContainer.style.backgroundImage = `url('Images/${currentQuestion}.jpg')`;
    
    // Optional: if the last page has different button layouts, we can hide them
    // but looking at the screenshots, all pages 0-13 seem to have 3 buttons.
}

function handleAnswerClick(e) {
    // You could track the selected answer here: e.target.id
    
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        updateView();
    } else {
        alert("Quiz Complete! Thanks for playing.");
        // Reset or redirect
        currentQuestion = 0;
        updateView();
    }
}

// Attach event listeners
buttons.forEach(btn => {
    btn.addEventListener('click', handleAnswerClick);
});

// Initialize
updateView();
