
function isJwtValid(jwtToken) {
    // Decode the JWT token
    var decodedToken = parseJwt(jwtToken);
  
    // Get the expiration time from the decoded token
    var expirationTime = decodedToken.exp;
  
    // Get the current time
    var currentTime = Math.floor(Date.now() / 1000);
  
    // Compare the expiration time with the current time
    if (expirationTime > currentTime) {
      // JWT is valid
      return true;
    } else {
      // JWT is expired
      return false;
    }
  }

  function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  function redirectToIndexIfTokenNotValid(token){
    if(token ===null ||  !isJwtValid(token)){
        if(window.location.pathname != '/root/index.html'){
            window.location.href ='/root/index.html';
        }
    }
  }
  function getToken(){
    var token = sessionStorage.getItem('access_token');
    redirectToIndexIfTokenNotValid(token);
    return token;
  }
  $(document).ready(function() {
    redirectToIndexIfTokenNotValid(sessionStorage.getItem('access_token'));
    if(sessionStorage.getItem('access_token') !=null &&  isJwtValid(sessionStorage.getItem('access_token'))){
        if(window.location.pathname === '/root/index.html'){
            window.location.href ='/root/home.html';
        }
    }
  });