var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var app = express();
var db = require("../models");



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


module.exports = function(app, router) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
  app.get('/', function(req, res){
    res.render('home', {
      title: "Login Page",
      layout: "login",
      style: "style.css"
    });
  });

    // signup route loads cms.html
    app.get("/signup", function(req, res) {
      res.render('signup', {
        title: "Sign Up Page",
        layout: "main",
        style: "signup.css"
      });
    });

    app.get("/forgotpassword", function(req, res) {
      res.render('forgotpassword', {
        title: "Forgot Password",
        layout: "main",
        style: "signup.css"
      });
    });

    router.get("/dashboard", function(req, res) {
      res.render('dashboard', {
        title: "Dashboard",
        
        style: "dashboard.css"
      });
    });
  
    app.get("/calendar", function(req, res) {
      res.render('calendar', {
        title: "calendar",
        
        style: "dashboard.css"
      });
    });

    app.get("/calendar/events", function(req, res){
      res.render('home', {
        title: "Calendar Events",
        
        style: "dashboard.css"
      });
    });
  
  
  };