

$(document).ready(function() {
  $(".subscription").click(function(e) {
  var token = sessionStorage.getItem('access_token');
	  $.ajax({
      url: "/create_subscription",
      type: "POST",
      data: '',
      success: function(response) {
        // handle successful response
        console.log(response);
      },
      error: function(xhr) {
        // handle error response
        console.log(xhr.responseText);
      }
    });
  });





  var token = sessionStorage.getItem('access_token');
  redirectToIndexIfTokenNotValid(token)
  $.ajax({
    url: "http://localhost:8080/authnz/home",
    type: "GET",
    dataType: "json",
    headers: {
      "Authorization": "Bearer "+token
    },
    success: function(response) {
      // handle successful response
      message = response.phoneNumber == null ? "Add phone number to get started" : response.phoneNumber
      $("#phoneNumber").text(message);
      console.log(response);
    },
    error: function(xhr) {
      // handle error response
      //TODO if the server is not running or some error take the person to the index page
      console.log(xhr.responseText);
    }
  });
  
});


 