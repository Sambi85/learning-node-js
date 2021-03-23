// redirecting-requests

const http = require('http');
const fs = require('fs'); //<- import file system from node.js , like before

const server = http.createServer( (req,res) => {
    const url = req.url;
    const method = req.method; //<-- pull method off req with dot notation

    if(url === '/') {
        res.setHeader('Content-Type', 'text.html');
        res.write('<html>');
        res.write('<head><title> Enter Message </title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form><body>');
        res.write('</html>');
        return res.end();
    }

    // note: if() + return syntax for request 
    // we want message url & a POST request, not a GET request

    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY FILE');
        res.statusCode = 302; //<-- this server code redirects page
        res.setHeader('Location','/'); //<-- label + direction to where we are going
        return res.end(); 
    }
        res.setHeader('Content-Type', 'text.html');
        res.write('<html>');
        res.write('<head><title> My First Page </title><head>');
        res.write('<body><h1> Hello from my Node.js Server!<h1><body>');
        res.write('</html>');
        return res.end(); 
});

server.listen(3000);