const http = require('http');
const express = require('express');
const bodyParser = require('body-parser'); //<-- import package a parser for your body 

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs');
    next();
} )

// .urlencoded() is specialized middleware function backed in to express, it takes in options(how you'd like to parse the body) 
// we need to pass these options below: extended is a config options for parsing non-default features.
app.use(bodyParser.urlencoded({extended: false}))  //<-- middleware function + bodyParser package + .next()

// making a form & button
app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');

    // form has an action to go to '/product'
    res.send('<form action="/product" method="POST"><input type="text" ><button></form>The Add Product Page</h1>')
} )

// under /product we redirect to home page with .redirect() which is baked-in to express ! 
// app.use('/product',(req, res, next) => {
//     res.redirect('/');
// })


// LIMITING Middleware function to specific requests !!!

// .get() listens for get requests, .post() listens for posts, etc...
app.get('/product',(req, res, next) => {
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    console.log('another middleware!');
    res.send('<h1>Hello from Express!</h1>') 
 } )




 

app.listen(3003); 