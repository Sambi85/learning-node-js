const http = require('http');
const express = require('express');
const app = express();

// The idea is we use a series of Middleware function calls  with .next()  
// and we can stop this chain of events with something like .send()

app.use( (req, res, next) => {
    console.log('In the middleware!');
    next(); //<-- need to invoke to  get the next middleware
} )

app.use( (req, res, next) => {
    console.log('another middleware!');
    res.send('<h1>Hello from Express!</h1>') //<-- send a response using .send(), which renders HTML
    // this also stops the chain of middleware
 } )

 // no longe needed:
// const server = http.createServer(app);
// server.listen(3003);

app.listen(3003); //Express.js will handle this with app.listen()