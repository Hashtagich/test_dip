
// const bookWrapper = document.getElementById('bookWrapper');
// const leftButton = document.querySelector('.left');
// const rightButton = document.querySelector('.right');
// let scrollAmount = 0;
// const scrollStep = 400; // Шаг прокрутки в пикселях

// function updateButtons() {
//     const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;
//     leftButton.style.display = scrollAmount > 0 ? 'block' : 'none';
//     rightButton.style.display = scrollAmount < maxScroll ? 'block' : 'none';
// }

// function scrollBooks(direction) {
//     const maxScroll = bookWrapper.scrollWidth - bookWrapper.offsetWidth;

//     if (direction === 'right') {
//         scrollAmount += scrollStep;
//         if (scrollAmount > maxScroll) scrollAmount = maxScroll;
//     } else if (direction === 'left') {
//         scrollAmount -= scrollStep;
//         if (scrollAmount < 0) scrollAmount = 0;
//     }

//     bookWrapper.style.transform = `translateX(-${scrollAmount}px)`;
//     updateButtons();
// }

// leftButton.onclick = () => scrollBooks('left');
// rightButton.onclick = () => scrollBooks('right');

// updateButtons();

document.querySelectorAll('.carousels').forEach((carousel) => {
    const bookWrapper = carousel.querySelector('.book-wrapper');
    const leftButton = carousel.querySelector('.scroll-btn.left');
    const rightButton = carousel.querySelector('.scroll-btn.right');
    const scrollStep = parseInt(carousel.getAttribute('data-scroll-step'), 10) || 600; 
    let scrollAmount = 0;

    function updateButtons() {
        const maxScroll = bookWrapper.scrollWidth - bookWrapper.parentElement.offsetWidth;
        leftButton.style.display = scrollAmount > 0 ? 'block' : 'none';
        rightButton.style.display = scrollAmount < maxScroll ? 'block' : 'none';
    }

    function scrollBooks(direction) {
        const maxScroll = bookWrapper.scrollWidth - bookWrapper.parentElement.offsetWidth;

        if (direction === 'right') {
            scrollAmount += scrollStep;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;
        } else if (direction === 'left') {
            scrollAmount -= scrollStep;
            if (scrollAmount < 0) scrollAmount = 0;
        }

        bookWrapper.style.transform = `translateX(-${scrollAmount}px)`;
        updateButtons();
    }

    leftButton.addEventListener('click', () => scrollBooks('left'));
    rightButton.addEventListener('click', () => scrollBooks('right'));

    updateButtons();
});


// карусель с отзывами

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper-withReviews");
  const reviews = document.querySelectorAll(".review");
  const leftBtn = document.querySelector(".leftBtn");
  const rightBtn = document.querySelector(".rightBtn");

  const reviewWidth = 310; 
  let currentOffset = 0; 

  function updateCarousel() {
    wrapper.style.transform = `translateX(${-currentOffset}px)`;
  }

  rightBtn.addEventListener("click", () => {
    if (currentOffset < (reviews.length - 1) * reviewWidth) {
      currentOffset += reviewWidth;
      updateCarousel();
    }
  });

  leftBtn.addEventListener("click", () => {
    if (currentOffset > 0) {
      currentOffset -= reviewWidth;
      updateCarousel();
    }
  });

  updateCarousel();
});