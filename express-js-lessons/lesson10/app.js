//need to export routing code, use a folder called 'routes'(convention)
const express = require('express')
const bodyParser = require('body-parser'); 
const adminRoutes = require('./routes/admin')  //<-- exports admin.js
const shopRoutes = require('./routes/shop') // <--- imports shop.js 

const app = express();
app.use(bodyParser.urlencoded({extended: false})) 

app.use(adminRoutes); 
app.use(shopRoutes);

app.use('/admin', adminRoutes); //<-- here we filter out paths, path + adminRoutes variable

app.use( (req, res, next) => { //<-- 404 page!  
    res.status(404).send('<h1> 404 Page not Found </h1>');
});

app.listen(3003);