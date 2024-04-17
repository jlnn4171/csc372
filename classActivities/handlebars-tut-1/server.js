// allows us to use express module
var express = require('express');

// app is an express application-- this is how we'll access all of the functionality of the module 
var app = express();

// set port number as 1337
var port = 1337;

// set up handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// make the app listen on the port
app.listen(port, function(){
    console.log('Express started on http://localhost:' + port + '; press Ctrl+C to terminate.');
});