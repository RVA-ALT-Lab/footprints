// /* MAKING THE MENU DO STUFF */

// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementsByClassName("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop+60;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("fixed")
//   } else {
//     navbar.classList.remove("fixed");
//   }
// }

/* FOTJ MENU THINGY */

// The FOTJ left chunk appears when scroll past the header
( function( $ ) {
    $(document).ready(function() {
    var header = $("header");
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height()) {
        header.addClass("fixed");
        header.slideDown(100);
        } else {
        header.slideUp(100, function() {
            header.removeClass("fixed");
        });
        }
    });  
    });
} )( jQuery );

