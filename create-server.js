// creating a server...

//This syntax sets up node.js library called http. 

const http = require('http');

// invoking a function from http library using dot notation
// callback funtion with request + response

const server = http.createServer( (req,res) => {
    console.log(req);
});

// establishes port for our server using, 
// will see information in our terminal 
// once we run the http request/get request in our browser

server.listen(3000);