// /* MOVING THE MENU ON SCROLL */

// // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("wrapper-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop+60;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//GET NEW PICS ON COVER PAGE
// $(function() {
//     "use strict";
//     !function(s, e) {
//         var o = 1;
//         window.setInterval(function() {
//             $("body").removeClass("cover-image" + o),
//             o++,
//             $("body").addClass("cover-image" + o),
//             o > e && (o = 1)
//         }, s)
//     }(8e3, 4);


/* SHOWING THE FOTJ MENU AFTER THE FOLD */

// The FOTJ left chunk appears when scroll past the header
// ( function( $ ) {
//     $(document).ready(function() {
//     var header = $("header");
    
//     $(window).scroll(function() {
//         if ($(window).scrollTop() > $(window).height()) {
//         header.addClass("fixed");
//         header.slideDown("fast");
//         } else {
//         header.slideUp("fast", function() {
//             header.removeClass("fixed");
//         });
//         }
//     });  
//     });
// } )( jQuery );