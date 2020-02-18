// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// send views/index.hbs for displaying in the browser
app.get("/", (req, res, next) => res.render("index"));

// all my routes
app.get("/home", (req, res, next) => res.render("index"));
app.get("/about", (req, res, next) => res.render("about"));
app.get("/works", (req, res, next) => res.render("works"));
app.get("/gallery", (req, res, next) => res.render("gallery"));

// Server Started
app.listen(3000, () => console.log('Congratulations Thibault, your server is started'));