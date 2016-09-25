// bootstrap application

require('dotenv').config();

var express 		= require('express');
var app 			= express();
var expressLayouts 	= require('express-ejs-layouts');
var mongoose     	= require('mongoose');
var bodyParser 	 	= require('body-parser');
var expressValidator = require('express-validator');

/**
 * express-session: gives us the ability to create sessions in Node so that we can store data.
 * cookie-parser  : give us the ability to read those sessions that are stored in cookies.
 * connect-flash  : let us save messages to flash-data (one-time use messages) 
 * 				    which we'll display as success/error messages.
 */

var session      	= require('express-session'),
  cookieParser   	= require('cookie-parser'),
  flash          	= require('connect-flash');

app.port = process.env.PORT || 8000;


app.use(cookieParser());
app.use(session({
	secret: process.env.SESSION_SECRET,
	cookie: {maxAge: 60000},
	resave: false, // forces the session to be saved back to the store
	saveUninitialized: false // don't save unmodified sessions
}));


app.use(flash());

// load all routes
var router = require('./routes');

// load database connection
require('./database');


// use body-parser for forms
app.use(bodyParser.urlencoded({extended: true}));

// use validation helper
app.use(expressValidator());

// template engine
app.set('view engine', 'ejs');
app.use(expressLayouts);


// set views directory
app.set('views', __dirname + '/../public/views');

/**
 * By default Express will not serve static files. It needs to be told explicitly 
 * where the static files are so that it can render them
 * 
 */

app.use(express.static(__dirname + '/../public'));


// middleware for all routes
app.use('/',router);


module.exports = app;

