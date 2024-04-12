var http = require('http');
var portNum = 1337;

http.createServer((request, response) => {
    // 1. Tell the broswer everything is OK (Status code 200) and the data is in plain text 
    response.writeHead (200, {
        'Content-Type': 'text/html'
    });

    // 2. Write the announced text to the body of the page
    response.write('<h1>Jules Nguyen</h1>\n');
    response.write("<p>I'm a first gen Vietnamese computer science student who will be graduating this semester.</p>\n");
    response.write('<ul><li>Scarlet Moon Ryeo (show)</li>\n');
    response.write('<li>Mortal Instruments (book series)</li>\n');
    response.write('<li>Solo Leveling (webtoon)</li></ul>\n');
    
    // 3. Tell the server that all of the response headers and body have sent 
    response.end();
    
    
}).listen(portNum); // 4. Tells the server what port to be on

console.log("Listening...Go to http://localhost:"+ portNum);