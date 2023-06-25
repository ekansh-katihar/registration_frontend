 
function getProfileInformation(){
  var token = sessionStorage.getItem('access_token');
  redirectToIndexIfTokenNotValid(token);
  profile=null;
  $.ajax({
    url: "http://localhost:8080/authnz/home",
    type: "GET",
    dataType: "json",
    headers: {
      "Authorization": "Bearer "+token
    },
    success: function(response) {
      // handle successful response
      profile  = response;
      console.log(response);
      $("#profile_image").attr("src", profile.picture);
      $("#profile_name").text(profile.name);
      if(profile.phoneNumber == null){
        $('#update_profile').hide();
      }
      $("#profile_phone_number").text(profile.phoneNumber);
      if(profile.subscriptionStatus !=null && profile.subscriptionType!=null){
       $("#profile_subscription").text(profile.subscriptionStatus +":"+ profile.subscriptionType);
      }
      if( "ACTIVE" == profile.subscriptionStatus){
        $('profile_phone_number').text(profile.phoneNumber);
        $("#active_subscription_message").show();
        if("PREMIUM" == profile.subscriptionType){
          $('stripe_subscription_message').show();
        }
      }
    },
    error: function(xhr) {
      console.log(xhr.responseText);
      redirectTo('/root/error.html');
    }
  });
  return profile;
}
$(document).ready(function() {
  var token = sessionStorage.getItem('access_token');
  redirectToIndexIfTokenNotValid(token);

  profile_card_callback = function() { 
    getProfileInformation();
  }
  $("#profile-card").load("/root/home/partials/_profile_card.html",profile_card_callback);
  
  // $.ajax({
  //   url: "http://localhost:8080/authnz/home",
  //   type: "GET",
  //   dataType: "json",
  //   headers: {
  //     "Authorization": "Bearer "+token
  //   },
  //   success: function(response) {
  //     // handle successful response
  //     message = response.phoneNumber == null ? "Add phone number to get started" : response.phoneNumber
  //     $("#phoneNumber").text(message);
  //     console.log(response);
  //   },
  //   error: function(xhr) {
  //     // handle error response
  //     //TODO if the server is not running or some error take the person to the index page
  //     console.log(xhr.responseText);
  //   }
  // });
  
});


 