// script.js
let currentSectionIndex = 0;

function navigate(direction) {
    const sections = document.querySelectorAll('.section');
    
    // Hide the currently active section
    sections[currentSectionIndex].classList.remove('active');
    if (direction == 1) {
        sections[currentSectionIndex].classList.add('left');
    }
    else if (direction == -1) {
        sections[currentSectionIndex].classList.add('right');
    }

    // Calculate the new index
    currentSectionIndex += direction;
    if (currentSectionIndex < 0) {
        currentSectionIndex = 0;
    } else if (currentSectionIndex >= sections.length) {
        currentSectionIndex = sections.length - 1;
    }

    // Remove old tag
    sections[currentSectionIndex].classList.remove('left', 'right')

    // Show the new active section
    setTimeout(() => {
        sections[currentSectionIndex].classList.add('active');
    }, 5); // Small delay to ensure transition is applied
}

// Handle arrow key navigation
document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowLeft':
            navigate(-1);
            break;
        case 'ArrowRight':
            navigate(1);
            break;
    }
});