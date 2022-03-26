/**
 * Import dependencies from node_modules
 * see commented examples below
 */

 import '@fortawesome/fontawesome-free/js/all.js';
 import AOS from 'aos';
 

 
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


// AOS
AOS.init({
  duration: 1200
});


//Navbar
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const navbar_link = document.getElementsByClassName('navbar__links');
const openMenu = () => {
  navbar.classList.add('navbar--show');
  toggle.classList.add('toggle--close');
}
const closeMenu = () => {
  navbar.classList.remove('navbar--show');
  toggle.classList.remove('toggle--close');
}
const toggleMenu = () => {
  if (navbar.classList.contains('navbar--show')) {
    closeMenu();
  } else {
    openMenu();
  }
}
toggle.addEventListener('click', toggleMenu);
for (var i = 0, len = navbar_link.length; i < len; i++) {
  navbar_link[i].addEventListener('click', closeMenu);
}

//Tap top
const Top = document.getElementById('totop');
window.onscroll = function() {
  scrollFunction()
};
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    Top.classList.add('totop--show');
  } else {
    Top.classList.remove('totop--show');
  }
}
Top.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});