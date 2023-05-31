// Get the slideshow container element
const slideshowContainer = document.querySelector('.slideshow-container');

// Get the previous and next buttons
const prevButton = slideshowContainer.querySelector('.prev-btn');
const nextButton = slideshowContainer.querySelector('.next-btn');

// Add event listeners for the buttons
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Function to show the previous slide
function showPreviousSlide() {
  const slideshow = slideshowContainer.querySelector('.slideshow');
  const currentSlide = slideshow.querySelector('img:first-child');
  const lastSlide = slideshow.querySelector('img:last-child');

  slideshow.insertBefore(lastSlide, currentSlide);
}

// Function to show the next slide
function showNextSlide() {
  const slideshow = slideshowContainer.querySelector('.slideshow');
  const currentSlide = slideshow.querySelector('img:first-child');

  slideshow.appendChild(currentSlide);
}