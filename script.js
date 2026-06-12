const gameContainer = document.getElementById('gameContainer');
const buttons = document.querySelectorAll('.quiz-btn');

let currentQuestion = 0;
const totalQuestions = 14;
let totalScore = 0;

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
    const btnId = e.target.id;
    
    // Add points based on the answer
    if (btnId === 'btn3') {
        totalScore += 2;
    } else if (btnId === 'btn2') {
        totalScore += 1;
    } else if (btnId === 'btn1') {
        totalScore += 0;
    }
    
    // Calculate and update meter fill percentage
    const maxScore = totalQuestions * 2;
    const fillPercentage = (totalScore / maxScore) * 100;
    const meterFill = document.getElementById('meterFill');
    if (meterFill) {
        meterFill.style.height = `${fillPercentage}%`;
    }
    
    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        updateView();
    } else {
        // Wait for meter animation to finish before alerting and resetting
        setTimeout(() => {
            alert("Quiz Complete! Thanks for playing.");
            // Reset or redirect
            currentQuestion = 0;
            totalScore = 0;
            if (meterFill) meterFill.style.height = '0%';
            updateView();
        }, 500); // 500ms timeout covers the 0.4s CSS transition
    }
}

// Attach event listeners
buttons.forEach(btn => {
    btn.addEventListener('click', handleAnswerClick);
});

// Initialize
updateView();
