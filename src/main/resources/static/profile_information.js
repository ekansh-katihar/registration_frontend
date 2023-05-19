$(document).ready(function() {
  //TODO if token is null take it to index page
  var token = sessionStorage.getItem('access_token');
  $.ajax({
    url: "http://localhost:8080/authnz/home",
    type: "GET",
    dataType: "json",
    headers: {
      "Authorization": "Bearer "+token
    },
    success: function(response) {
      // handle successful response
      $("#phoneNumber").text(response.phoneNumber);
      console.log(response);
    },
    error: function(xhr) {
      // handle error response
      //TODO if the server is not running or some error take the person to the index page
      console.log(xhr.responseText);
    }
  });
  
});


 