# Wineshop
>Progressive web app  that allow users to find and purchase their favourite wines. 

## Table of contents
* [Description](#description)
* [Live Demo](#live-demo)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [App Info](#app-info)

## Description
 Wineshop Application is a responsive web app for viewing and shopping wines. Built with  reactJs, SCSS, redux, and webpack,
the web app communicates with a data source endpoint to fetch and display various categories of wines that users can view and add to cart for purchase.


## Live Demo
Here is a working live demo : [live](https://wineshop-8adb2.web.app/) 


## Screenshot

### Index

![screenshot](https://user-images.githubusercontent.com/31744209/120983662-938b7c00-c782-11eb-9c16-8a8c65b81f80.png)



## Technologies
* Technologies used:
  * `React` 15.6 - for displaying UI components
  * `SCSS` 15.6 - for stylesheet  
  * `Redux` 3.7 -  predictable state container for managing application state
  * `Webpack` 3.1 - module bundler for this application 
  * `Express` 4.1 - middleware is used to handle requests, routes
  * `Jest` 20.0 - testing framework for Javascript codebase, specifically React for this application.
  * `Enzyme` 2.9 - JavaScript Testing utility for React that makes it easier to test your React Components' output.
 
  
  ## Setup
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.


###  Clone repo
Run the following scripts in the terminal to clone the repo
```
$ git clone git@github.com:jamesmogambi/wineshop.git
$ cd wineshop
```

----------------------------------


### Install  dependencies

```bash
npm install
```

### Run App

```bash
npm run dev-server
```
Runs the app in the development mode.<br>
The page will reload if you make edits.<br>

### Run Tests
```bash
npm run test --watch
```
Launches the test runner in the interactive watch mode.<br>


### Build for production

```bash
npm run build-prod
```

### Test production before deploy

After running a build 👆, run the following script...


```bash
npm run start
```

### Deploy to Heroku 
To deploy the build to Heroku run the following script...

```bash
npm run heroku-postbuild
```


## Features
List of features:
* View list of wines
* View product
* Product information
* Product Image
* Cart summary
* Add to Cart
* Remove Product
* Adjust quantity
* Empty cart
* Shopping cart
* Checkout with credit card 
* Checkout with delivery address
* Filter Products 
* Sort product by price


To-do List:
* Add  view related products


## App Info

### Author

James Mogambi
[James Mogambi](https://github.com/jamesmogambi)

### Version

2.0.0

### License

This project is licensed under the MIT License

