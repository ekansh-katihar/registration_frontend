$(document).ready(function() {
  $(".submit.btn").click(function(e) {
    var token = getToken();
    e.preventDefault(); // prevent default form submission behavior
    var formData= $(this).parent("form").serialize(); // get form data as string
	  var mockData = {"phone_number":"438822822"}; 
    // send AJAX request to API endpoint
    $.ajax({
      url: "http://localhost:8080/authnz/update-phone",
      type: "POST",
      dataType: "json",
      headers: {
        "Authorization": "Bearer "+token
      },
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
  
  $(document).on("click", "button.subscription", function(e) {
    var token = getToken();
    plan = $(this).attr('name')
	  $.ajax({
      url: "http://localhost:8080/authnz/create-subscription?plan="+plan,
      type: "POST",
      dataType: "json",
      headers: {
        "Authorization": "Bearer "+token
      },
      success: function(response) {
        window.sessionStorage.setItem('subscriptionId', response.SUBSCRIPTION_ID);
        window.sessionStorage.setItem('clientSecret', response.CLIENT_SECRET);
        window.location.href = '/root/payment.html';
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