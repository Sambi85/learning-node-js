//  Routing Requests - Send button on the DOM

const http = require('http');

const server = http.createServer( (req,res) => {
    const url = req.url;

    /// route for / which will render the button
    if(url === '/') {
        res.setHeader('Content-Type', 'text.html');
        res.write('<html>');
        res.write('<head><title> Enter Message </title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></form><body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text.html');
    res.write('<html>');
    res.write('<head><title> My First Page </title><head>');
    res.write('<body><h1> Hello from my Node.js Server!<h1><body>');
    res.write('</html>');
    return res.end(); // <-- This will run as a default route, 
              // anything that isn't EXACTLY '/' will render this code
});

server.listen(3000);