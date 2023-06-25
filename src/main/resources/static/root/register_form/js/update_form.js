$(document).ready(function() {
// Get the current URL
const url = new URL(window.location.href);

// Get the search parameters from the URL
const searchParams = new URLSearchParams(url.search);

// Get the value of a specific parameter
const paramValue = searchParams.get('subscription');

console.log(paramValue); // Output: The value of the parameter

remoteUrl = null;
subscriptionType = null;
if("TRIAL" == paramValue) {
  $('#register').text('Subscribe');
  remoteUrl = "http://localhost:8080/authnz/subscribe"; 
  subscriptionType = 'TRIAL'
}else{
  $('#register').text('Update');
  remoteUrl = "http://localhost:8080/authnz/update-user"; 
}

  $("#register").click(function(e) {
    var token = getToken();
    redirectToIndexIfTokenNotValid(token);
    e.preventDefault(); // prevent default form submission behavior
    var phoneNumber = $("#phoneNumber").val();
    var apiKey = $("#apiKey").val();
    var formData = {
      phoneNumber: phoneNumber,
      apiKey: apiKey,
      subscription: subscriptionType
    };
    // send AJAX request to API endpoint
    $.ajax({
      url: remoteUrl,
      type: "POST",
      contentType: "application/json",
      headers: {
        "Authorization": "Bearer "+token
      },
      data:  JSON.stringify(formData),
      success: function(response) {
        $("#form_save_message").text("Information updated");
        $("#form_save_message").removeClass('alert-danger');
        $("#form_save_message").addClass('alert-success');
        $("#form_save_message").show();
        console.log(response);
      },
      error: function(xhr) {
        $("#form_save_message").text("Information update failed");
        $("#form_save_message").addClass('alert-danger');
        $("#form_save_message").removeClass('alert-success');
        $("#form_save_message").show();
      }
    });
  });
  
});