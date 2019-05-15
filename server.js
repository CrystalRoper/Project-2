
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require('express')
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser')
var env = require('dotenv').config()
var exphbs = require('express-handlebars')
var router = express.Router();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// For BodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))

// session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions

// For Handlebars
app.set('views', './views')
app.engine('handlebars', exphbs({
  extname: '.handlebars',
  defaultLayout: "main"
}))
app.set('view engine', '.handlebars')

// Models
var models = require('./models')

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app, router);
app.use(router);
 
//load passport strategies
require('./config/passport.js')(passport, models.user);

// Syncing our sequelize models and then starting our Express app
// =============================================================
models.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});