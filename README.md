
# MERN Ecommerce

## Description

The presence of e-commerce has created convenience and innovation for humans. Variables such as perceived benefits, specific areas of innovation and shopping orientations that are fast, branded and certified show that interest in online shopping is growing. On the other hand, businesses tend to create online shops offering lower prices, due to its low operational requirements of e-business.
This dissertation is about the development and design of a modern online store for the purchase of technology products, books and projection films. The user has the ability to browse the products, place his order and manage his account. He will still have the possibility of direct conversation with the Administrator end will be able to choose products from the recommendations that will be made to him. On the other hand, the Administrator will be able to see in detail the sales made in real time and manage them. In addition, there will be an analytics page where we can see with a graph with the income from the orders until the end of the day and the graph will be refreshed in real time. In addition, you will also make a comparison of days in the orders to see the difference in sales.
The implementation was based on the JavaScript programming language and the MongoDB database were used for its. The web application was implemented for the presentation layer with React.js. The Visual Studio Code IDE was used for development.
![image](https://github.com/ChrisZaikis/zaikis_dipl/assets/171047564/cce5f3f6-c474-4e40-bc44-ebd8d878075e)

## Quickstart Guide

To run this project locally you can use docker compose provided in the repository. Here is a guide on how to run this project locally using docker compose.

Clone the repository
```
$ git clone https://github.com/mohamedsamara/mern-ecommerce.git
```

Edit the dockercompose.yml file and update the the values for MONGO_URI and JWT_SECRET

Then simply start the docker compose:
```
$ docker compose -f dockercompose.yml up
```

## Database Seed

* The seed command will create an admin user in the database
* The email and password are passed with the command as arguments
* Like below command, replace brackets with email and password. 
* For more information, see code [here](server/utils/seed.js)

```
npm run seed:db [email-***@****.com] [password-******] // This is just an example.
```

## Demo

This application is deployed on Vercel Please check it out :smile: [here](https://mern-store-gold.vercel.app).

See admin dashboard [demo](https://mernstore-bucket.s3.us-east-2.amazonaws.com/admin.mp4)

## Install

Some basic Git commands are:

```
$ git clone https://github.com/mohamedsamara/mern-ecommerce.git
$ cd project
$ npm install
```

## Start development

```
$ npm run dev
```

## Simple build for production

```
$ npm run build
```

## Run build for production

```
$ npm start
```


## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/)

- [Mongoose](https://mongoosejs.com/)

- [React](https://reactjs.org/)

- [Webpack](https://webpack.js.org/)


### Code Formatter

- Add a `.vscode` directory
- Create a file `settings.json` inside `.vscode`
- Install Prettier - Code formatter in VSCode
- Add the following snippet:  

```json

    {
      "editor.formatOnSave": true,
      "prettier.singleQuote": true,
      "prettier.arrowParens": "avoid",
      "prettier.jsxSingleQuote": true,
      "prettier.trailingComma": "none",
      "javascript.preferences.quoteStyle": "single",
    }

```
