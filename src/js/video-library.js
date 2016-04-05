var html = '';
var links = [
  {title: 'Money Matrix', category: 'Wealth &amp; Wisdom', url: '22syy9k6gt'},
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

  ret += '<div class="video-wrapper">';
  ret += '<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async></script>';
  ret += '<h1>' + link.title + '</h1>';
  ret += '<h3>' + link.category + '</h3>';
  ret += '<div class="wistia_embed wistia_async_' + link.url + '" style="height:320px;width:426px;margin:0px auto">&nbsp;</div>';
  ret += '<div class="video-link-container"><a class="video-library-back" href="index.html">Go Back</a></div>';

  return ret;
}

  for (var i = 0; i < links.length; i++) {
    html += populateVideoList(links[i]);
  }

  $('#populateList').html(html);
