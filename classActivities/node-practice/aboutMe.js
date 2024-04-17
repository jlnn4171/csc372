var http = require('http');
var portNum = 1337;

var routes = {

    '/': function index(request, response){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end('<h2>Hello World!</h2>'); 
    },

    '/about': function about(request, response){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end('<h2>About Me ...</h2>'); 
    },

    '/contact': function contact(request, response){
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.end('<h2>Contact Us!</h2>'); 
    },
}

http.createServer((request, response) => {
    
    if (request.url in routes){
        return routes[request.url](request, response);
    }
    
    response.writeHead(404, {
        'Content-Type': 'text/html'
    });
    
    response.end('<h2>Page not found.</h2>'); 
    
}).listen(portNum); 

console.log("Listening...Go to http://localhost:"+ portNum);