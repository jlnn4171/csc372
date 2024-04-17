
// load the http and file system modules into respective variables
// http module allows to create a server
// fs module allows to access file system (i.e., files that we will be serving are in our file system) 

var http = require('http'),
    fs = require('fs');

const PORT = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    // if there is no http response status code, then assume everything is okay 
    // set http response status code to 200 to tell browser everything is okay 

    if(!responseCode) {
        responseCode = 200;
    }

    // try to read the file that is located at the path that is being passed in 
    // _dirname resolves to the path where this file lives

    fs.readFile(__dirname + path, function(err, data) {

        // tell browser there was an internal server error
        if(err) {
            // include in our header that there was an internal server error
            res.writeHead (500, {'Content-Type': 'text/plain' });

            // give the user an error messaage in plain text and tell browser all info has been sent 
            res.end('500 - Internal Error');

        }
         
        // otherwise, we know that there is no error and that it works
        else {
            // give it whatever the response code and content type was 
            res.writeHead (responseCode,
                {'Content-Type': contentType });
            // send over whatever data we have 
            res.end(data);
        }
    });
}

function getImageContentType(imagePath) {
    var ext = imagePath.substring(imagePath.lastIndexOf(".") + 1);
    switch (ext.toLowerCase()) {
        case "jpg":
        case "jpeg":
            return "image/jpeg";
        case "png":
            return "image/png";
        case "gif":
            return "image/gif";
        default:
            return "application/octet-stream"; // Default content type for unknown file types
    }
}


http.createServer (function(req, res) {
    // normalize url by removing querystring, optional trailing slash, and making lowercase
    //  replace function takes in what to replace using regular expression that says find anything after ? 
    //  and replace with nothing
    //  make everything lower case

    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    
    switch(path) {
        
        // if they go to http://localhost:1337, then serve the home page
        // break tells switch statement that this case is over and done executing
        case '':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;

        /*case '/404':
            serveStaticFile(res, '/public/404.html', 'text/html');
            break;*/

        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        
        case '/services':
            serveStaticFile(res, '/public/services.html', 'text/html');
            break;
        
        case '/css/style1.css':
            serveStaticFile(res, '/public/css/style1.css', 'text/css');
            break;
        
        case '/css/about.css':
            serveStaticFile(res, '/public/css/about.css', 'text/css');
            break;
    
        case '/css/services.css':
            serveStaticFile(res, '/public/css/services.css', 'text/css');
            break;
    
        case '/js/cost.js':
            serveStaticFile(res, '/public/js/cost.js', 'text/js');
            break;
        
        case '/js/form.js':
            serveStaticFile(res, '/public/js/form.js', 'text/js');
            break;

        case '/js/map.js':
            serveStaticFile(res, '/public/js/map.js', 'text/js');
            break;
        
        case '/js/picAnimation.js':
            serveStaticFile(res, '/public/js/picAnimation.js', 'text/js');
            break;
        
        case '/js/team-html.js':
            serveStaticFile(res, '/public/js/team-html.js', 'text/js');
            break;

        
        // in the case that it is none of the above cases, we have a default case so that our server does not break 
        //  and we serve the 404 page
        //  we let server know that something went wrong by setting http response status code to 404
        default:
            
            if (path.substring(1, 8) === "images/") {
                var imagePath = path.substring(8); // Remove "images/" from the path
                var contentType = getImageContentType(imagePath); // Determine the content type based on the file extension
                serveStaticFile(res, "/public/images/" + imagePath, contentType);
            }
            else{
                serveStaticFile(res,"404.html","text/html");
            }
        
    }

}).listen(PORT); // tells the server what port to be on

console.log("Server running on: http://localhost:" + PORT);