'use strict';


// practice button to scroll to top
//Get the button:
const mybutton = document.getElementById("myBtn");

// When the user scrolls down ???px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari(practiceneeded)
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}