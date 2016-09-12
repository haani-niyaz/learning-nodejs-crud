// node application setup


var express = require('express');
var app = express();
expressLayouts = require('express-ejs-layouts');

app.port = process.env.PORT || 8000;

// Bring in all routes
var router = require('./routes');

// middleware for all routes
app.use('/',router);

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


module.exports = app;

