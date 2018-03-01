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

// Image Collage Stuff
var allImages = [];
numPhotos = 16;

for (i = 1; i < numPhotos; i++) {
    allImages.splice(Math.floor(Math.random() * allImages.length), 0, '<img src="./img/friends/' + i + '.jpg">');
    allImages.splice(Math.floor(Math.random() * allImages.length), 0, '<img src="./img/friends/' + i + '.jpg">');
}
$('#photos1').append(allImages);

for (i = 1; i < numPhotos; i++) {
    allImages.splice(Math.floor(Math.random() * allImages.length), 0, '<img src="./img/friends/' + i + '.jpg">');
    allImages.splice(Math.floor(Math.random() * allImages.length), 0, '<img src="./img/friends/' + i + '.jpg">');
}
$('#photos2').append(allImages);

// Isotope Initialize
$('.isotope-container').fadeIn();
var $container = $('.isotope-container').isotope({
    itemSelector: '.isotope-item',
    layoutMode: 'fitRows',
    transitionDuration: '0.6s',
    filter: "*"
});
// filter items on button click
$('.filters').on( 'click', 'ul.nav li a', function() {
    var filterValue = $(this).attr('data-filter');
    $(".filters").find("li.active").removeClass("active");
    $(this).parent().addClass("active");
    $container.isotope({ filter: filterValue });
    return false;
});
