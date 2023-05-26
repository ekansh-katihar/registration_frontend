$(document).ready(function() {
  header_callback = function() { 
    if(window.location.pathname != '/index.html'){
      $('#nav_login').hide();
    }
  }
  subscription_callback = function() { 
    if(window.location.pathname == '/index.html'){
      $('button.subscription').hide();
    }
  }

  $("#main_header").load("header.html", header_callback ); 
  $("#subscriptions").load("subscriptions.html",subscription_callback);
  $("#main_footer").load("footer.html");
 
  
});
