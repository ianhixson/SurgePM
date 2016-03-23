/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.uber.com/v1/products?latitude=37.7759792&longitude=-122.41823');
xhr.setRequestHeader("Authorization", "qJxLLD_mhPA3vQYt-z3nYoNxRuZpuP2Xcl8jXiat");
xhr.send();
*/

var response = $.ajax({
  type:"GET",
  url:"https://api.uber.com/v1/products?latitude=37.7759792&longitude=-122.41823",
  crossDomain: true,
  beforeSend: function (request)
  {
    request.setRequestHeader("Authorization", "Token qJxLLD_mhPA3vQYt-z3nYoNxRuZpuP2Xcl8jXiat");
  },
  complete: function (request)
  {
    console.log(response);
  }
});
