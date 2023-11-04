setTimeout(() => {

AOS.init({
      duration: 5000,
      easing: 'ease-in-out-back'
});

// Owl Carousel
$('#featureCarousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    loop:true,
    margin:0,
    nav:false,
    items: 1,
    dots: false,
    autoplay:true,
    autoplayTimeout:2500,
})

$('#secBannerslider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutUp',
    autoplayTimeout:10000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$(document).ready(function() {
    var lastScroll = 0;
  
    // jQuery(document).ready(function($) {
    //   $(window).scroll(function() {
    //     setTimeout(function() {
    //       //gives 100ms to finish scrolling before doing a check
    //       var scroll = $(window).scrollTop();
    //       if (scroll > lastScroll) {
    //         $("header").addClass("fixedHeader");
    //       } else if (scroll < lastScroll) {
    //         $("header").removeClass("fixedHeader");
    //       }
    //       lastScroll = scroll;
    //     }, 50);
    //   });
    // });
$(window).scroll(function(){
    if ($(this).scrollTop() > 70) {
       $('header').addClass('fixedHeader');
    } else {
       $('header').removeClass('fixedHeader');
    }
});

    jQuery(document).ready(function($) {
        $(window).scroll(function() {
          setTimeout(function() {
            //gives 100ms to finish scrolling before doing a check
            var scroll = $(window).scrollTop();
            if (scroll > lastScroll) {
              $(".fixed-get").addClass("getFooterfixed");
            } else if (scroll < lastScroll) {
              $(".fixed-get").removeClass("getFooterfixed");
            }
            lastScroll = scroll;
          }, 20);
        });
      });


  });
  $('.testimonial_owlCarousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    autoplay:false,   
    smartSpeed: 3000, 
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

    /* Isotope Gallery */
  
    // init isotope
    var $gallery = $(".tm-gallery").isotope({
      itemSelector: ".tm-gallery-item",
      layoutMode: "fitRows"
    });
    // layout Isotope after each image loads
    $gallery.imagesLoaded().progress(function() {
      $gallery.isotope("layout");
    });
  
    $(".filters-button-group").on("click", "a", function() {
      var filterValue = $(this).attr("data-filter");
      $gallery.isotope({ filter: filterValue });
      console.log("Filter value: " + filterValue);
    });
  
    /* Tabs */
    $(".tabgroup > div").hide();
    $(".tabgroup > div:first-of-type").show();
    $(".tabs a").click(function(e) {
      e.preventDefault();
      var $this = $(this),
        tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
        others = $this
          .closest("li")
          .siblings()
          .children("a"),
        target = $this.attr("href");
      others.removeClass("active");
      $this.addClass("active");
  
      // Scroll to tab content (for mobile)
      if ($(window).width() < 992) {
        $("html, body").animate(
          {
            scrollTop: $("#tmGallery").offset().top
          },
          200
        );
      }
    });
},100);





var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Joomla Development')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Laravel')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Codeigniter')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Angular')
    .pauseFor(2500)
    .deleteAll()

    .typeString('React')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Perfex CRM')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Magento')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Drupal')
    .pauseFor(2500)
    .deleteAll()

    .typeString('Web Design')
    .pauseFor(2500)
    .deleteAll()
    
    .typeString('Webflow')
    .pauseFor(2500)
    .start();




  var $wrap = $('.homebanner-img img'),
    lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 12;

function animate() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  $wrap.css({
    'transform': 'translate(-50%, -50%) perspective(600px) rotateY(' + -x + 'deg) rotateX(' + y + 'deg)'
  });
  window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {
  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (12 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
});

animate();


        

// mobilemenu
$(document).ready(function() {

  $(document).on("scroll", function(){
          if
        ($(document).scrollTop() > 200){
            $("mobile-header").addClass("shrink");
          }
          else
          {
              $("mobile-header").removeClass("shrink");
          }
      });
  
  // Hamburger
  $('.menu-toggle').on('click', function() {
      $('.menu-toggle').toggleClass('active');
      $('.main-menu').toggleClass('menu-active');
      
  });
  
  });
  // mobilemenu

  $(".ui.accordion").accordion({
    selector: {}
  });
  