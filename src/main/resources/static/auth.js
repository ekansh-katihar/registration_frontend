$(document).ready(function() {
// TODO dont need this function
  $(".auth.btn").click(function(e) {
    e.preventDefault(); // prevent default form submission behavior
    
    $.ajax({
      url: "http://localhost:8080/oauth2/authorization/google",
      type: "GET",
      dataType: 'json',
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

function redirectTo(destination){
  window.location.href =destination;
}
function jfx(response) {
  if (response && !response.error) {
    // User has successfully authenticated with Google OAuth
    // var token = response.credentials;
    // TODO: Send the token to the server for verification and login
    sessionStorage.setItem('access_token', response.credential);
    redirectTo('/home.html');
  } else {
    //TODO when will this get called? 
    // There was an error with the authentication
    console.log("Google authentication error:", response.error);
  }
}