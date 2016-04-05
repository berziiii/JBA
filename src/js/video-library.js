var html = '';
var links = [
  {title: 'Money Matrix', category: 'Wealth &amp; Wisdom', url: 'lqxkubtzoy'},
  {title: 'Transfers Of Wealth', category: 'Wealth &amp; Wisdom', url: 'a7jlsggdiv'},
  // {Title: ' Ski Coach.'},
  // {Title: ' Longboarder.'},
  // {Title: ' Problem-Solver.'},
  // {Title: ' Baltimorean.'},
  // {Title: ' Do-It-Yourselfer.'},
  // {Title: ' Innovator.'},
  // {Title: ' Technologist.'}
  ];

function populateVideoList(link) {

  var ret = '';

  ret += '<div class="col-lg-6 col-md-6 col-sm-6 video-wrapper">';
  ret += '<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script>';
  ret += '<h3>' + link.title + '</h3>';
  ret += '<h4>' + link.category + '</h4>';
  ret += '<div class="wistia_embed wistia_async_' + link.url + '" style="height:320px;max-width:426px;margin:0px auto">&nbsp;</div>';
  ret += '<div class="video-link-container"><a class="video-library-back" href="index.html">Go Back</a></div>';
  ret += '</div>';

  return ret;
}

  for (var i = 0; i < links.length; i++) {
    html += populateVideoList(links[i]);
  }

  $('#populateList').html(html);
