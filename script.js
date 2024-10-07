// script.js
let currentIndex = 0;
let maxIndex = 12;

function navigate(direction) {

    const sections = document.querySelectorAll('.section');

    // Calculate the new index
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }
    
    sections.forEach(section => {
        const showFrom = parseInt(section.dataset.showFrom);
        const hideAfter = parseInt(section.dataset.hideAfter);
        
        if (currentIndex < showFrom) {
            setTimeout(() => {
                section.classList.remove('active');
                section.classList.add('right');
            }, 5);
        }
        else if (currentIndex > hideAfter) {
            setTimeout(() => {
                section.classList.remove('active');
                section.classList.add('left');
            }, 5);
        }
        else {
            setTimeout(() => {
                section.classList.remove('right', 'left');
                section.classList.add('active');
            }, 5);
        }
    })
    
    // // Hide the currently active section
    // sections[currentSectionIndex].classList.remove('active');
    // if (direction == 1) {
    //     sections[currentSectionIndex].classList.add('left');
    // }
    // else if (direction == -1) {
    //     sections[currentSectionIndex].classList.add('right');
    // }


    // // Remove old tag
    // sections[currentSectionIndex].classList.remove('left', 'right')

    // // Show the new active section
    // setTimeout(() => {
    //     sections[currentSectionIndex].classList.add('active');
    // }, 5); // Small delay to ensure transition is applied
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