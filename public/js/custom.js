
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


/* Mobile Navigation
    -----------------------------------------------*/
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


 /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#intro').parallax("100%", 0.1);
    $('#overview').parallax("100%", 0.3);
    $('#detail').parallax("100%", 0.2);
    $('#video').parallax("100%", 0.3);
    $('#speakers').parallax("100%", 0.1);
    $('#program').parallax("100%", 0.2);
    $('#register').parallax("100%", 0.1);
    $('#faq').parallax("100%", 0.3);
    $('#venue').parallax("100%", 0.1);
    $('#sponsors').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);

  }
  initParallax();


  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-speakers").owlCarousel({
      autoPlay: 6000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });
  });


  /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

    /* gallery section
  -----------------------------------------------*/
  document.getElementById('photo1').addEventListener('mouseover', hoverIn);
document.getElementById('photo1').addEventListener('mouseout', hoverOut);

document.getElementById('photo2').addEventListener('mouseover', hoverIn2);
document.getElementById('photo2').addEventListener('mouseout', hoverOut2);

document.getElementById('photo3').addEventListener('mouseover', hoverIn3);
document.getElementById('photo3').addEventListener('mouseout', hoverOut3);

document.getElementById('photo4').addEventListener('mouseover', hoverIn4);
document.getElementById('photo4').addEventListener('mouseout', hoverOut4);

document.getElementById('photo5').addEventListener('mouseover', hoverIn5);
document.getElementById('photo5').addEventListener('mouseout', hoverOut5);

// ---------------------------------------------------------------
document.getElementById('gallery-imgs').addEventListener('mouseout',hoverIn );

// --------------------------------------------------------------
function hoverIn(){
    var currnt_img = document.getElementById('img-sec1');
    currnt_img.classList.add('img-sec-current')
    console.log("Hello");
}
function hoverOut(){
    var currnt_img = document.getElementById('img-sec1');
    currnt_img.classList.remove('img-sec-current');
    console.log("bye")
}
// ----------------------------------------------------------------
function hoverIn2(){
    var currnt_img = document.getElementById('img-sec2');
    currnt_img.classList.add('img-sec-current')
    var currnt_img1 = document.getElementById('img-sec1');
    currnt_img1.classList.remove('img-sec-current');}
function hoverOut2(){
    var currnt_img = document.getElementById('img-sec2');
    currnt_img.classList.remove('img-sec-current');
    
    console.log("bye")
}
// ----------------------------------------------------------------
function hoverIn3(){
    var currnt_img = document.getElementById('img-sec3');
    currnt_img.classList.add('img-sec-current')
    var currnt_img1 = document.getElementById('img-sec1');
    currnt_img1.classList.remove('img-sec-current');
}
function hoverOut3(){
    var currnt_img = document.getElementById('img-sec3');
    currnt_img.classList.remove('img-sec-current');
    console.log("bye")
}
// ----------------------------------------------------------------
function hoverIn4(){
    var currnt_img = document.getElementById('img-sec4');
    currnt_img.classList.add('img-sec-current')
    var currnt_img1 = document.getElementById('img-sec1');
    currnt_img1.classList.remove('img-sec-current');
}
function hoverOut4(){
    var currnt_img = document.getElementById('img-sec4');
    currnt_img.classList.remove('img-sec-current');
    console.log("bye")
}
// ----------------------------------------------------------------
function hoverIn5(){
    var currnt_img = document.getElementById('img-sec5');
    currnt_img.classList.add('img-sec-current')
    var currnt_img1 = document.getElementById('img-sec1');
    currnt_img1.classList.remove('img-sec-current');
}
function hoverOut5(){
    var currnt_img = document.getElementById('img-sec5');
    currnt_img.classList.remove('img-sec-current');
    console.log("bye")
}



