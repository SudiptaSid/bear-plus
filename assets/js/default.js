// ==================== Fixed Menu ==================== 
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#cs_navbar").addClass("fixed_menu");
    } else {
        $("#cs_navbar").removeClass("fixed_menu");
    }
});
// ==================== Smooth Scroll ====================
// Select all links with hashes
$('.scroll')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
            });
        }
    }
});
// ================= To Top =================
$(document).ready(function(){ 
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn();
        } else {
            $('#scrollup').fadeOut();
        }
    }); 
    $('#scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
// ==================== About Slider ==================== 
$('#intro_slider').owlCarousel({
    margin:0,
    items: 1,
    nav:false,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    dots:true,
    loop:true,
    smartSpeed:1000,
    autoplay: true,
    autoplayHoverPause: false,
    responsiveClass:true, 
});
// ==================== Lightbox ==================== 
$(function(){
    var gallery = $('.gallery a').simpleLightbox({navText:    ['&lsaquo;','&rsaquo;']});
});