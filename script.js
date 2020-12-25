// Humburger Menu
const menuToggle = document.querySelector('.menu-toggle input');
const navLink = document.querySelector('.nav-link');

menuToggle.addEventListener('click', function(){
  navLink.classList.toggle('slide');
});

// Nav scroll
window.addEventListener("scroll", function() {
  let nav = document.querySelector('.navbar');
  if(window.pageYOffset > 200) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
});
