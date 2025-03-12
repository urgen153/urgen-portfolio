const logo = document.querySelector('.nav-items-first-part');
const navItems = document.querySelector('.nav-items-second-part');
const menuIcon = document.querySelector('.menu-icon');
let index = 0;


function showSlide() {
    const slides = document.querySelector('.slider');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    index++;
    showSlide();
}

function prevSlide() {
    index--;
    showSlide();
}
  
// setInterval(() => {
//     nextSlide();
//  }, 5000);

 
 menuIcon.addEventListener('click', () => {
    navItems.classList.toggle("active");
    logo.classList.toggle("hidden");
});