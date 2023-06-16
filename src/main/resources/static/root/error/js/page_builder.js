$(document).ready(function() {
  console.log('window.location.pathname '+window.location.pathname );

  header_callback = function() { 
    if(window.location.pathname != '/root/index.html'){
      $('#nav_login').hide();
    }
  }
  
  subscription_callback = function() { 
    if(window.location.pathname == '/root/index.html'){
      $('button.subscription').hide();
    }
    token = sessionStorage.getItem('access_token')
    if(!isJwtValid(token)){
      $('#premium_info').show();
    }else{
      $('#premium_stripe').show();
    }
  }

  profile_card_callback = function() { 
    getProfileInformation();
  }
  //$("#main_header").load("shared/_header.html", header_callback ); 
  // $("#profile-card").load("profile_card.html",profile_card_callback);
  $("#subscriptions").load("shared/partials/_subscription-info.html",subscription_callback);
  //$("#main_footer").load("shared/_footer.html");
 
  
});
