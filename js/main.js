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