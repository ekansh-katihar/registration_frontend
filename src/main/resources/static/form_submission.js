$(document).ready(function() {
  
  $(".submit.btn").click(function(e) {
    e.preventDefault(); // prevent default form submission behavior
    var formData= $(this).parent("form").serialize(); // get form data as string
	var mockData = {"phone_number":"438822822"}; 
    // send AJAX request to API endpoint
    $.ajax({
      url: "/update_phone",
      type: "POST",
      data: mockData,
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
  $(".subscription").click(function(e) {
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
  
});



function jfx(response) {
  if (response && !response.error) {
    // User has successfully authenticated with Google OAuth
    var token = response.id_token;
    // TODO: Send the token to the server for verification and login
    $.ajax({
      url: "http://localhost:8080/authnz/home",
      type: "POST",
      data: response,
      success: function(response) {
        // handle successful response
        console.log(response);
      },
      error: function(xhr) {
        // handle error response
        console.log(xhr.responseText);
      }
    });
  } else {
    // There was an error with the authentication
    console.log("Google authentication error:", response.error);
  }
}