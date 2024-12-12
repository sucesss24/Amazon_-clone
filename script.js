const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;

// Function to update the visible slide
function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; // Hide all images
    }
    imgs[n].style.display = 'block'; // Show the current image
}

// Initialize by showing the first image
changeSlide();

// Event listener for the previous button
prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1; // Loop back to the last image
    }
    changeSlide();
});

// Event listener for the next button
next_btn.addEventListener('click', (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0; // Loop back to the first image
    }
    changeSlide();
});

// Horizontal scroll logic for product containers
const scrollContainers = document.querySelectorAll('.products');

for (const item of scrollContainers) {
    item.addEventListener('wheel', (e) => {
        e.preventDefault(); // Prevent default scrolling behavior
        if (e.deltaY > 0) {
            item.scrollLeft += 100; // Scroll right
        } else {
            item.scrollLeft -= 100; // Scroll left
        }
    });
}
