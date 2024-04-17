var express = require('express');
var app = express();
var port = 1337;

//handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//path to public directory
const publicDirPath = __dirname + '/myNodeSite/public/';

// css, images, and js as root directories to serve static files
app.use('/css', express.static(publicDirPath + 'css'));
app.use('/images', express.static(publicDirPath + 'images'));
app.use('/js', express.static(publicDirPath + 'js'));

//render each template and send appropriate data
app.get('/index', function(request, response) {
    response.render('index');
});

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/about', function(request, response) {
    response.render('about');
});

app.get('/contact', function(request, response) {
    response.render('contact');
});

app.get('/services', function(request, response) {
    response.render('services');
});

// Catch-all handler for 404 errors
app.use(function(request, response, next) {
    response.status(404);
    response.render('404');
});

// Error handler for 500 errors
app.use(function(err, request, response, next) {
    console.error(err.stack);
    response.status(500);
    response.render('500');
});

app.listen(port, function() {
   console.log('Server is running on http://localhost:' + port);
});
