/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.uber.com/v1/products?latitude=37.7759792&longitude=-122.41823');
xhr.setRequestHeader("Authorization", "qJxLLD_mhPA3vQYt-z3nYoNxRuZpuP2Xcl8jXiat");
xhr.send();
*/

$('#go').click(function(e){

  e.preventDefault();

  var startlat = $('#startlat').text();
  var startlong = $('#startlong').text();
  var formedurl = "https://api.uber.com/v1/products?latitude=" + startlat + "&longitude=" + startlong;

  $.ajax({
    type:"GET",
    url: formedurl,
    crossDomain: true,
    beforeSend: function (request)
    {
      request.setRequestHeader("Authorization", "Token qJxLLD_mhPA3vQYt-z3nYoNxRuZpuP2Xcl8jXiat");
    },
    complete: function (request)
    {
      $('#results').html(JSON.stringify(response));
      console.debug(response);
    }
  });

});
