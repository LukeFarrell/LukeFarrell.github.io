(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict

// Slick.js carousel
$(document).ready(function(){
    $('.press-display').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.press-nav'
    });
    $('.press-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.press-display',
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});



// AOS Stuff
AOS.init({
  duration: 1500,
})

var allImages = "";

allImages += '<img src="./img/friends/1.jpg" alt="pal">';
allImages += '<img src="./img/friends/2.jpg" alt="pal">';
allImages += '<img src="./img/friends/3.jpg" alt="pal">';
allImages += '<img src="./img/friends/4.jpg" alt="pal">';
allImages += '<img src="./img/friends/5.jpg" alt="pal">';
allImages += '<img src="./img/friends/6.jpg" alt="pal">';
allImages += '<img src="./img/friends/7.jpg" alt="pal">';
allImages += '<img src="./img/friends/8.jpg" alt="pal">';
allImages += '<img src="./img/friends/9.jpg" alt="pal">';
allImages += '<img src="./img/friends/10.jpg" alt="pal">';
allImages += '<img src="./img/friends/11.jpg" alt="pal">';
allImages += '<img src="./img/friends/12.jpg" alt="pal">';
allImages += '<img src="./img/friends/13.jpg" alt="pal">';
allImages += '<img src="./img/friends/14.jpg" alt="pal">';
allImages += '<img src="./img/friends/15.jpg" alt="pal">';
allImages += '<img src="./img/friends/16.jpg" alt="pal">';
// Add more photos to the collage here

$('#photos').append(allImages);

$( "img" ).on( "mouseover", function() {
      $( this ).css( "filter", "none" );
});
