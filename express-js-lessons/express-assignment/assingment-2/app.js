const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static())

app.use(adminRoutes);
app.use(usersRoutes);

app.use('/admin', adminRoutes);

app.use( (req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(3003);