# AI based communication
This project provides the UI which helps user to subscribe to the AI messenger service. 
Once the subscription is active user can directly interact with AI using Whatsapp

## Detail
The project is written using Javascript, Jquery, Bootstrap, HTML, CSS and to serve the content Spring Boot's embedded server Tomcat is used. 
It interacts with the backend application [Registration](https://github.com/ekansh-katihar/registration) to fetch necessary details about the user. 
The frontend also integrates with Stripe payment system and after a successful payment [webhook](https://github.com/ekansh-katihar/payment-integration) is called.

## Building and Running
```
$ cd $PROJECT_HOME
$ mvn clean package spring-boot:repackage
$ cd target
$ java -jar  registration_frontend-0.0.1-SNAPSHOT.jar
```
Now access to `http://localhost:4242/root/index.html`

## Publish changes with Github Action
To make any changes create a branch and get it merged to the `main` branch. On merging to `main` Github Action will push up the changes to AWS S3 `intg-2023` bucket. 

**To download the folder from s3 bucket to your local directory**
`aws s3 cp s3://intg-2023/root root --recursive`
