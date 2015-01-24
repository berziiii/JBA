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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*Individual collapse blurbs*/
var expandAccordion = function(e) {
  $('#plus-' + e.data.index).toggleClass('rotate-open');
  $('.accordian-content-' + e.data.index).collapse('toggle');
};
 
for (var i = 1; i <= 4; i++) {
  $('#ind-' + i).click({ index: i }, expandAccordion);
}

/*Business collapse blurbs*/
var expandAccordion = function(e) {
  $('#plus-' + e.data.index).toggleClass('rotate-open');
  $('.accordian-content-' + e.data.index).collapse('toggle');
};
 
for (var i = 5; i <= 6; i++) {
  $('#bus-' + (i - 4)).click({ index: i }, expandAccordion);
}


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var expandWhy = function(e) {
  $('#plus-why-' + e.data.index).toggleClass('rotate-open');
  $('#why-content-' + e.data.index).collapse('toggle');
};
 
for (var i = 1; i <=8; i++) {
  $('#why-' + i).click({ index: i }, expandWhy);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Resume Content modal*/

$('#openResumeContent').on('click', function () {
  $('#resumeContent').modal('show')
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Platform Content modal*/

$('#openPlatform').on('click', function () {
  $('#platformContent').modal('show')
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*Terms Content modal*/

$('#openTermsContent').on('click', function () {
  $('#termsContent').modal('show')
});
