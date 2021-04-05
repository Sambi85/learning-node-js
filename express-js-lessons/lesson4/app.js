const http = require('http');
const express = require('express');
const app = express();


// if we needed a middleware that is applied to ALL REQUESTS, do this... 
app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
} )

// No need for .next() here, we just use the .send() method to handle routes
// based off first argument we funnel direct our routes
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The Add Product Page</h1>')
} )

app.use('/',(req, res, next) => {
    console.log('another middleware!');
    res.send('<h1>Hello from Express!</h1>') 
 } )

app.listen(3003); 