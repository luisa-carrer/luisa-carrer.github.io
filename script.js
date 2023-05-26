// Get the navigation bar element
var navbar = document.querySelector('.navbar');

// Define the scroll event listener
window.addEventListener('scroll', function() {
  // Check the scroll position
  if (window.pageYOffset > 0) {
    // Add the scroll class and remove the initial class
    navbar.classList.add('navbar-scroll');
    navbar.classList.remove('navbar-initial');
  } else {
    // Add the initial class and remove the scroll class
    navbar.classList.add('navbar-initial');
    navbar.classList.remove('navbar-scroll');
  }
});
