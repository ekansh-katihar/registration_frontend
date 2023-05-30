$(document).ready(function() {
  let stripe, cardElement;
  var token = getToken('access_token');

  // Extract the client secret query string argument. This is
  // required to confirm the payment intent from the front-end.
  const subscriptionId = window.sessionStorage.getItem('subscriptionId');
  const clientSecret = window.sessionStorage.getItem('clientSecret');
  if(subscriptionId == null || clientSecret == null ){
    window.location.href ='/root/home.html';
  }


  // helper method for displaying a status message.
  const setMessage = (message) => {
    const messageDiv = $('#messages');
    messageDiv.append("<br>" + message);
  };

  // Fetch public key and initialize Stripe.

  $.ajax({
    url: 'http://localhost:8080/authnz/config',
    dataType: 'json',
    headers: {
      'Authorization': "Bearer " + token
    }
  }).done((resp) => {
    stripe = Stripe(resp.publishableKey);

    const elements = stripe.elements();
    cardElement = elements.create('card');
    cardElement.mount('#card-element');
  });


  // Payment info collection and confirmation
  // When the submit button is pressed, attempt to confirm the payment intent
  // with the information input into the card element form.
  // - handle payment errors by displaying an alert. The customer can update
  //   the payment information and try again
  // - Stripe Elements automatically handles next actions like 3DSecure that are required for SCA
  // - Complete the subscription flow when the payment succeeds
  const form = $('#subscribe-form');
  form.on('submit', async (e) => {
    e.preventDefault();
    const nameInput = $('#name');

    // Create payment method and confirm payment intent.
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: nameInput.val(),
        },
      }
    }).then((result) => {
      if (result.error) {
        setMessage(`Payment failed: ${result.error.message}`);
      } else {
        // Redirect the customer to their account page
        setMessage('Success! Redirecting to your account.');
        window.location.href = '/root/account.html';
      }
    });
  });

});
