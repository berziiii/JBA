var html = '';
var links = [
  {title: '10 Minute Lesson', url: 'uim44zntlu'},
  {title: 'Circle of Wealth', url: 'i2x2ips551'},
  {title: 'Club vs. Swing', url: 'wq48jv72s5'},
  {title: 'College Funding', url: 'bj920wsa5t'},
  {title: 'Mortgages', url: 'fjhrzpjurr'},
  {title: 'Personal Economic Model', url: '22syy9k6gt'},
  {title: 'Private Reserve Strategy', url: '5xq1lrkpld'},
  {title: 'Qualified Plans', url: 'jhlkjcr8ps'},
  {title: 'Ready for Retirement?', url: '74qkronge4'},
  {title: 'Your Bank', url: 'cp1fxpwqr4'},
  ];

function populateVideoList(link) {

  var ret = '';

  ret += '<div class="col-lg-6 col-md-6 col-sm-6 video-wrapper video-library-container">';
  ret += '<script charset="ISO-8859-1" src="https://fast.wistia.com/assets/external/E-v1.js" async></script>';
  ret += '<h3>' + link.title + '</h3>';
  ret += '<div class="wistia_embed wistia_async_' + link.url + '" style="height:320px;max-width:426px;margin:0px auto">&nbsp;</div>';
  ret += '</div>';

  return ret;
}

  for (var i = 0; i < links.length; i++) {
    html += populateVideoList(links[i]);
  }

  $('#populateList').html(html);
