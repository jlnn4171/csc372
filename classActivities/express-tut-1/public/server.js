// allows us to use express module
const express = require('express');

// app is an express application-- this is how we'll access all of the functionality of the module 
const app = express();

// set port number as 1337
const port = 1337;

// create path to directory with files
const dir = ___dirname + '/public/';

// look for static files to be served inside public directory 
app.use(express.static('public'));

// look for static files to be served inside img directory 
app.use(express.static('public/img'));

// get the route to the homepage and respond by serving the HTML file for it 
app.get('/', function(request, response) {
    response.sendFile(dir + 'jellyfish.html');
});

// get the route to the cat page and respond by serving the HTML file for it 
app.get('/jellyfish', function(request, response) {
    response.sendFile(dir + 'jellyfish.html');
});

// get the route to the dog page and respond by serving the HTML file for it 
app.get('/gecko', function(request, response) {
    response.sendFile(dir + 'gecko.html');
});

// add a wildcard for any route that is not defined and respond by serving 404 HTML file 
app.get('/', function(request, response) {
    response.sendFile(dir + '404.html');
});

// make the app list on the port
app.listen(port, function() {
    console.log('Listening on http://localhost:' + port + 'press ctrl+c to quit');
})