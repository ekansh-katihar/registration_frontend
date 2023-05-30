# AI based communication
This project provides the UI which helps user to subscribe to the AI messenger service. 
Once the subscription is active user can directly interact with AI using Whatsapp

## Requirements
The project is written using Javascript, Jquery, Bootstrap, HTML and CSS. 
It interacts with the backend application [Registration](https://github.com/ekansh-katihar/registration) to fetch necessary details about the user. 
The frontend also integrates with Stripe payment system and after a successful payment [webhook](https://github.com/ekansh-katihar/payment-integration) is called.

## Local Development 
Import the proect in the eclipse and run the class WebAppServer. Then go to `http://localhost:4242/root/index.html`.

## Publish changes with Github Action
To make any changes create a branch and get it merged to the `main` branch. On merging to `main` Github Action will push up the changes to AWS S3 `intg-2023` bucket. 
