// redirecting-requests

const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text.html');
        res.write('<html>');
        res.write('<head><title> Enter Message </title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form><body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {
        const body = []; // <-- our body
        req.on('data', chunk => {  //<-- .on() is event listener + chunks of data from async
            console.log(chunk);
            body.push(chunk); // <-- push to body array 
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString(); //<-- use Buffer(holds async code) + .concat() on body + convert to string 
            const message = parsedBody.split('=')[1]; //<-- split into elements by '='            fs.writeFileSync('message.txt',message)
            return res.end(); 
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
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