
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser'); 
const adminRoutes = require('./routes/admin') 
const shopRoutes = require('./routes/shop') 

const app = express();
app.use(bodyParser.urlencoded({extended: false})) 

app.use(adminRoutes); 
app.use(shopRoutes);

app.use('/admin', adminRoutes); //<-- here we filter out paths, path + adminRoutes variable

app.use( (req, res, next) => {
    res.status(404).send('<h1> 404 Page not Found </h1>');
});

app.listen(3003);
