const http = require('http');

// no more routes, we import express! 
const express = require('express');


// we invoke the express function here, save to a variable
const app = express();

console.log(express) // <-- what's logged is a nested object, 
                     //     it carries lots of useful functions!

// .use() = manages input for middleware 
// req = request, it's an object
// res = response, also an object 
// next = fires off next middleware

app.use( (req, res, next) => {
    console.log('In the middleware!');
    next(); //<-- need to invoke to  get the next middleware
} )

app.use( (req, res, next) => {
    console.log('another middleware!');
    next(); //<-- need to invoke to  get the next middleware
} )


const server = http.createServer(app); //<-- in lieu of our routes variable, we place express

server.listen(3003);

// type npm start in command line, which kicks up our start script in package.json ! 