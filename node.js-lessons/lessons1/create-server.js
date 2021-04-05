// creating a server...

//This syntax sets up node.js library called http. 

const http = require('http');

// invoking a function from http library using dot notation

// callback funtion with request + response

const server = http.createServer( (req,res) => {
    
    // console.log(req); <-- test response, check terminal 
    
    // consol.log(req.url, req.method, req.headers) <--- specific req data use dot notation !
    
    //process.exit() <-- ends service by ending event loop
   
    
    //writes html using setHeader,write, & end
    //* re-start server when changes are made
    
    res.setHeader('Content-Type', 'text.html');
    res.write('<html>');
    res.write('<head><title> My First Page </title><head>');
    res.write('<body><h1> Hello from my Node.js Server!<h1><body>');
    res.write('</html>');
    return res.end(); // <-- can not use .write() after .end()
});


// establishes port for our server using, 

// will see information in our terminal 

// once we run the http request/get request in our browser

server.listen(3000);


//* End Server Short Cut: CTRL + C in terminal