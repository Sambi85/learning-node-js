const express = require('express')
const path = require('path')
const bodyParser = require('body-parser'); 
const adminData = require('./routes/admin') 
const shopRoutes = require('./routes/shop') 
const app = express();

app.set('view engine', 'ejs'); // <-- listen to template engine here
app.set('views', 'views'); //<--


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(adminData.routes); 
app.use(shopRoutes);
app.use('/admin', adminData.routes);

app.use( (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' })  
});// <--- refactor the middle ware 



app.listen(3003);