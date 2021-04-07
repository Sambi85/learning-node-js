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

app.use( (req, res, next) => {
    res.sendFile(path.join(__dirname, "views","page-not-found.html"))  
});
//<-- deleted 404 res.status(). We made an html page for this in views!!!

app.listen(3003);