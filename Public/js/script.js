let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('header .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navBar.classList.toggle('active');
  shoppingBtn.classList.remove('fa-times');
  shoppingNavbar.classList.remove('active');
};

let shoppingBtn = document.querySelector('#shopping-btn');
let shoppingNavbar = document.querySelector('header .shopping-navbar');

shoppingBtn.onclick = () => {
  shoppingBtn.classList.toggle('fa-times');
  shoppingNavbar.classList.toggle('active');
  navBar.classList.remove('active');
  menuBtn.classList.remove('fa-times');
};

window.onscroll = () => {
  shoppingBtn.classList.remove('fa-times');
  shoppingNavbar.classList.remove('active');
  navBar.classList.remove('active');
  menuBtn.classList.remove('fa-times');
};
