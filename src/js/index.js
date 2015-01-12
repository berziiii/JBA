$('a[href*=#]:not([href=#])').click(function() {
 
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 112
      }, 1000);
      return false;
    }
  }
});

$("#slider").owlCarousel({
  items: 1,
  singleItem: true,
  navigation: true,
  navigationText: ['<<','>>'],
  pagination: true,
  paginationNumbers: false,
  autoPlay: 10000
});

$(document).ready(function() {
    $(".fancybox").fancybox({
      helpers : {
        overlay : {
            css : {
                'background' : 'rgba(0, 0, 0, 0.9)'
            }
          } 
        }
    });
  });

/*Individual and Business collapse blurbs*/

$('#ind-1').on('click', function() {
  $('#plus-1').toggleClass('rotate-open');
  $('.accordian-content-1').collapse('toggle');
});

$('#ind-1').on('mouseover mouseout', function() {
  $('#plus-1').toggleClass('hidden');
});

$('#ind-2').on('click', function() {
  $('#plus-2').toggleClass('rotate-open');
  $('#ind-collapseTwo').collapse('toggle');
});

$('#ind-2').on('mouseover mouseout', function() {
  $('#plus-2').toggleClass('hidden');
});

$('#ind-3').on('click', function() {
  $('#plus-3').toggleClass('rotate-open');
  $('#ind-collapseThree').collapse('toggle');
});

$('#ind-3').on('mouseover mouseout', function() {
  $('#plus-3').toggleClass('hidden');
});

$('#ind-4').on('click', function() {
  $('#plus-4').toggleClass('rotate-open');
  $('#ind-collapseFour').collapse('toggle');
});

$('#ind-4').on('mouseover mouseout', function() {
  $('#plus-4').toggleClass('hidden');
});

$('#bus-1').on('click', function() {
  $('#plus-5').toggleClass('rotate-open');
  $('#bus-collapseOne').collapse('toggle');
});

$('#bus-1').on('mouseover mouseout', function() {
  $('#plus-5').toggleClass('hidden');
});

$('#bus-2').on('click', function() {
  $('#plus-6').toggleClass('rotate-open');
  $('#bus-collapseTwo').collapse('toggle');
});

$('#bus-2').on('mouseover mouseout', function() {
  $('#plus-6').toggleClass('hidden');
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*About Image Hover effec*/

$('.about-img').on('mouseover mouseout', function () {
  $('.about-img-blurb').toggleClass('hidden')
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$('#why-1').on('click', function() {
  $('#plus-why-1').toggleClass('rotate-open');
  $('#why-content-1').collapse('toggle'); 
});

$('#why-1').on('mouseover mouseout', function() {
  $('#plus-why-1').toggleClass('hidden');
});

$('#why-2').on('click', function() {
  $('#plus-why-2').toggleClass('rotate-open');
  $('#why-content-2').collapse('toggle');
});

$('#why-2').on('mouseover mouseout', function() {
  $('#plus-why-2').toggleClass('hidden');
});

$('#why-3').on('click', function() {
  $('#plus-why-3').toggleClass('rotate-open');
  $('#why-content-3').collapse('toggle'); 
});

$('#why-3').on('mouseover mouseout', function() {
  $('#plus-why-3').toggleClass('hidden');
});

$('#why-4').on('click', function() {
  $('#plus-why-4').toggleClass('rotate-open');
  $('#why-content-4').collapse('toggle');
});

$('#why-4').on('mouseover mouseout', function() {
  $('#plus-why-4').toggleClass('hidden');
});

$('#why-5').on('click', function() {
  $('#plus-why-5').toggleClass('rotate-open');
  $('#why-content-5').collapse('toggle'); 
});

$('#why-5').on('mouseover mouseout', function() {
  $('#plus-why-5').toggleClass('hidden');
});

$('#why-6').on('click', function() {
  $('#plus-why-6').toggleClass('rotate-open');
  $('#why-content-6').collapse('toggle');
});

$('#why-6').on('mouseover mouseout', function() {
  $('#plus-why-6').toggleClass('hidden');
});

$('#why-7').on('click', function() {
  $('#plus-why-7').toggleClass('rotate-open');
  $('#why-content-7').collapse('toggle'); 
});

$('#why-7').on('mouseover mouseout', function() {
  $('#plus-why-7').toggleClass('hidden');
});

$('#why-8').on('click', function() {
  $('#plus-why-8').toggleClass('rotate-open');
  $('#why-content-8').collapse('toggle');
});

$('#why-8').on('mouseover mouseout', function() {
  $('#plus-why-8').toggleClass('hidden');
});


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Resume Content Lightbox*/

$('#openResumeContent').on('click', function () {
  $('#resumeContent').removeClass('hidden')
});

$('.lightbox').on('click', function () {
  $('#resumeContent').addClass('hidden')
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Platform Content Lightbox*/
$('#openPlatform').on('click', function () {
  $('#platformContent').removeClass('hidden')
});

$('.lightbox').on('click', function () {
  $('#platformContent').addClass('hidden')
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Terms Content Lightbox*/

$('#openTermsContent').on('click', function () {
  $('#termsContent').removeClass('hidden')
});

$('.lightbox').on('click', function () {
  $('#termsContent').addClass('hidden')
});
