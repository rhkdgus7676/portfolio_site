'use strict';

const hamburger_bar = document.querySelector('.menu_burgerbar');
const menu_drop =  document.querySelector('.navbar_right');


hamburger_bar.addEventListener('click' , ()=>{
  menu_drop.classList.toggle('active');
});