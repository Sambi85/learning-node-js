const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
// const usersRoutes = require('./routes/users');
const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

//Parse Body
app.use(bodyParser.urlencoded({extended: false}));

// For Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Managing Routes
app.use(adminData.routes);
// app.use(usersRoutes);
// app.use('/admin', adminData.routes);

app.use( (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
});

// Listen for Port 3003
app.listen(3003);