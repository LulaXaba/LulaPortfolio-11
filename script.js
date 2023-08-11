/*=============toggle icon navbar================*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}; 

/*=============Scroll sections active link================*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  /*=============sticky navbar================*/ 
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /*=============menu icon and navbar when click navbar link (scroll)================*/ 
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*=============swipper================*/ 
var swiper = new swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextE1: ".swiper-button-next",
    prevE1: ".swiper-button-prev",
  },
});

/*=============scroll reveal================*/ 
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000, 
  delay: 2000
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' }); // Fixed typo in reveal() method
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' }); // Fixed typo in reveal() method
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' }); // Fixed typo in reveal() method
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' }); // Fixed typo in reveal() method

/*=============typed js================*/ 
const typed = new Typed('.multiple-text', {
  strings: ['Software Developer', 'Web Developer', 'UI/UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/*=============Light Mode================*/ 
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}; 