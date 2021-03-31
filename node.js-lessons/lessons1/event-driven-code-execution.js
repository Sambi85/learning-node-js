// Event Driven Code

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

    // Since req.on() is carrying callbacks, 
    //they only referenced when executing the code. 
    //When the call stack runs, you'll get an error if you don't add a return statement
    // we need to wait for our req.on(end...) to finish building out the body!!!! 

    if(url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => { //<-- HERE you WANT to wait for this async. code. Thus we use a return ! 
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            // fs.writeFileSync('message.txt', message);  //<-- won't run until done, this blocks code and that's problematic ...
            
            fs.writeFile('message.txt', message, err => { //<-- new syntax! and callback function

                res.statusCode = 302;  //<-- move this code inside
                res.setHeader('Location','/');
                return res.end();

                // This refactor, never blocks code which is IDEAL! Faster + Better UX!  
            }); 
        })

    }
        res.setHeader('Content-Type', 'text.html');
        res.write('<html>');
        res.write('<head><title> My First Page </title><head>');
        res.write('<body><h1> Hello from my Node.js Server!<h1><body>');
        res.write('</html>');
        return res.end(); 
});

server.listen(3000);