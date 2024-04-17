const express = require('express');
const app = express();
const port = 1337;

//variable that stores the path to the public directory
const publicDirPath = __dirname + '/public/';

//css, images, and js as root directories to serve static files
app.use('/css', express.static(publicDirPath + '/css'));
app.use('/images', express.static(publicDirPath + '/images'));
app.use('/js', express.static(publicDirPath + '/js'));

//serve web page based on the path

app.get('/', function(request, response) {
    response.sendFile(publicDirPath + 'index.html');
});

app.get('/index.html', function(request, response) {
    response.sendFile(publicDirPath + 'index.html');
});

app.get('/about.html', function(request, response) {
    //console.log("Accessing About page...");
    response.sendFile(publicDirPath + 'about.html');
});

app.get('/contact.html', function(request, response) {
    //console.log("Accessing contact page...");
    response.sendFile(publicDirPath + 'contact.html');
});

app.get('/services.html', function(request, response) {
    //console.log("Accessing services page...");
    response.sendFile(publicDirPath + 'services.html');
  });

//for any route not defined
app.get('*', function(request, response) {
    response.sendFile(publicDirPath + '404.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
