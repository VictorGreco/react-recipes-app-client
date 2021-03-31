# Assembler School: React Recipes App Client <!-- omit in toc -->

Client App for the Assembler School Recipes App.

## Table Of Contents <!-- omit in toc -->

- [Apps](#apps)
- [Frontend Stack](#frontend-stack)
- [Getting Started](#getting-started)
- [App Features](#app-features)
- [Postman Collection](#postman-collection)
- [The UI](#the-ui)
- [Login Page](#login-page)
- [Sign Up](#sign-up)
- [Home Page](#home-page)
- [Recipe Details Page](#recipe-details-page)

## Apps

- [Client App](https://github.com/assembler-school/react-recipes-app-client)
- [Server App](https://github.com/assembler-school/react-recipes-app-server)

## Frontend Stack

- React.js
- Redux.js
- redux-persist
- redux-thunk
- redux-devtools-extension
- redux-logger
- Reselect
- normalizr
- SCSS

## Getting Started

### Install Dependencies

Run `npm i` or `yarn` in the terminal to install the dependencies.

Then, run `npm run start` or `yarn start` to start up the app.

The app will be run by default in the following url: `http://localhost:3000/`

### The Server

This client side app uses a server to fetch all the recipe data needed.

It is build with node.js, express and mongodb and you can find the instructions
in the main readme on how to set it up.

## App Features

This project is a fictional recipes app that users can see different recipes
with comments and votes.

## Postman Collection

In the `/src/postman` folder you can find a Postman collection with the main
endpoints you will need in the this projects to connect to the Node.js server.

Before you make the requests you have to run the server first otherwise the
endpoints will not be accessible.

## The UI

You are free to develop the contents that are included in the UI that you want.
We provide you a base implementation so that you can focus only on the data
fetching and Redux state management logic but you can also implement your own
UI.

## Login Page

<img src="./src/assets/img/01-login.png">

In this page users can login with their credentials.

The network request will be made to the following endpoint:

- `http://localhost:4000/user/login`
- method: `POST`
- headers: `"Content-Type": "application/json"`
- body:

```json
{
  "email": "the-email",
  "password": "the-password"
}
```

Sample response:

```json
{
  "data": {
    "user": {
      "_id": "605c9e201a1796687acb48bb",
      "name": "person name",
      "lastname": "person lastname",
      "email": "name@mail.com"
    },
    "token": "jwt token"
  },
  "error": null
}
```

This endpoint will return a json response that includes the user details and the
JWT you will need to make requests to the authenticated endpoints.

### Error Handling

You should also handle errors returned from the API so that the users can know
if anything went wrong.

<img src="./src/assets/img/02-login-error.png">

## Sign Up

<img src="./src/assets/img/03-sign-up.png">

In this page users can create an account with their credentials and sign up.

The network request will be made to the following endpoint:

- `http://localhost:4000/user/sign-up`
- method: `POST`
- headers: `"Content-Type": "application/json"`
- body:

```json
{
  "name": "name",
  "lastname": "lastname",
  "email": "name@mail.com",
  "password": "the-password"
}
```

Sample response:

```json
{
  "data": {
    "user": {
      "_id": "605caaa11a1796687acb48bd",
      "name": "name",
      "lastname": "lastname",
      "email": "mail@mail.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDVjYWFhMTFhMTc5NjY4N2FjYjQ4YmQiLCJpYXQiOjE2MTY2ODU3MjksImV4cCI6MTYxNjg1OasdadsDUyOX0.RacjAMepHv5wCWlTEB-NDFve5YGDkqhqpMJM1rSLz2s"
  },
  "error": null
}
```

One the users have logged in or signed up, you will have to store in the Redux
store their information so that the app has access to the auth state.

## Home Page

<img src="./src/assets/img/06-home-results.png">

In this page users can see the listing of the recipes from the app.

Each recipes should be rendered in a Card and have a link to the recipes details
page.

The network request will be made to the following endpoint:

- `http://localhost:4000/recipes`
- method: `GET`

Sample response: `see the Postman collection`

If there are no recipes in the server you should render the following contents
(the images is an svg in the `assets` folder):

<img src="./src/assets/img/05-home-no-results.png">

## Recipe Details Page

<img src="./src/assets/img/07-recipes-no-commments.png">

In this page users can see the individual details of the recipes they opened
from the home page.

Each recipe page should show the info from the screenshots bellow.

The network request will be made to the following endpoint:

- `http://localhost:4000/recipes/:recipeID`
- method: `GET`

Sample response: `see the Postman collection`

Recipes have comments which users can see and even posts new ones if they are
logged in.

<img src="./src/assets/img/08-recipes-with-commments.png">

If there are no comments you should render the following message:

<img src="./src/assets/img/07-recipes-no-commments.png">

If the users are logged in you should render a `New comment` button that opens a
form so that users can make a request to the following endpoint:

<img src="./src/assets/img/09-recipes-logged-in.png">

This endpoint requires authentication and you need to send the JWT with each
request. The token can be fetched from the login or sign up endpoints.

- `http://localhost:4000/recipes/:recipeID/comment`
- method: `POST`
- headers:
  - `"Content-Type": "application/json"`
  - `Authorization: Bearer ${JWT_TOKEN}`
- body:

```json
{
  "commentBody": "Test comment"
}
```

Sample response:

```json
{
  "data": {
    "_id": "605cb5451a1796687acb48be",
    "author": {
      "_id": "605c9e201a1796687acb48bb",
      "name": "dani",
      "lastname": "dani"
    },
    "body": "Test comment",
    "recipe": "605c9e0a1a1796687acb48b3"
  },
  "error": null
}
```

### Up Votes

If the users are authenticated they should also be able to up vote a recipe in
the recipe details page.

<img src="./src/assets/img/12-recipes-page-header.png">

Clicking on the `Up vote` button the recipe will receive an up vote. The request
will have to be made to the following endpoint:

This endpoint requires authentication and you need to send the JWT with each
request. The token can be fetched from the login or sign up endpoints.

- `http://localhost:4000/recipes/:recipeID/up-vote`
- method: `POST`
- headers:
  - `"Content-Type": "application/json"`
  - `Authorization: Bearer ${JWT_TOKEN}`

Sample response:

```json
{
  "data": {
    "votes": {
      "upVotes": 2,
      "downVotes": 3
    },
    "difficulty": "Fácil",
    "ingredients": [
      "1 mango",
      "1 bolsa de espinas",
      "1 cebolla roja",
      "Aceite de oliva",
      "1 limón"
    ],
    "hoursToPrep": 0,
    "_id": "605c9e0a1a1796687acb48b3",
    "name": "Ensalada de espinacas y mango",
    "description": "¿Puede haber algo más sano y sabroso que esta ensalada? Creemos que no. El mango es una fruta tropical que se cosecha sobre todo durante la primavera y el verano que tiene un muy dulce.",
    "image": "https://images.unsplash.com/photo-1562629609-49c10e58c2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80",
    "serves": 4,
    "minutesToPrep": 15
  },
  "error": null
}
```

### Down Votes

If the users are authenticated they should also be able to down vote a recipe in
the recipe details page.

<img src="./src/assets/img/12-recipes-page-header.png">

Clicking on the `Down vote` button the recipe will receive an up vote. The
request will have to be made to the following endpoint:

This endpoint requires authentication and you need to send the JWT with each
request. The token can be fetched from the login or sign up endpoints.

- `http://localhost:4000/recipes/:recipeID/down-vote`
- method: `POST`
- headers:
  - `"Content-Type": "application/json"`
  - `Authorization: Bearer ${JWT_TOKEN}`

Sample response:

```json
{
  "data": {
    "votes": {
      "upVotes": 2,
      "downVotes": 3
    },
    "difficulty": "Fácil",
    "ingredients": [
      "1 mango",
      "1 bolsa de espinas",
      "1 cebolla roja",
      "Aceite de oliva",
      "1 limón"
    ],
    "hoursToPrep": 0,
    "_id": "605c9e0a1a1796687acb48b3",
    "name": "Ensalada de espinacas y mango",
    "description": "¿Puede haber algo más sano y sabroso que esta ensalada? Creemos que no. El mango es una fruta tropical que se cosecha sobre todo durante la primavera y el verano que tiene un muy dulce.",
    "image": "https://images.unsplash.com/photo-1562629609-49c10e58c2a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3024&q=80",
    "serves": 4,
    "minutesToPrep": 15
  },
  "error": null
}
```

## Author <!-- omit in toc -->

[Dani Lucaci](https://www.danilucaci.com/).

## License <!-- omit in toc -->

Licensed under the [MIT License](./LICENSE).
