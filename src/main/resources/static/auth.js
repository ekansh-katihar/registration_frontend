function jfx(response) {
  if (response && !response.error) {
    // User has successfully authenticated with Google OAuth
    // var token = response.credentials;
    // TODO: Send the token to the server for verification and login
    sessionStorage.setItem('access_token', response.credential);
    window.location.href  = '/home.html';
  } else {
    //TODO when will this get called? 
    // There was an error with the authentication
    console.log("Google authentication error:", response.error);
  }
}