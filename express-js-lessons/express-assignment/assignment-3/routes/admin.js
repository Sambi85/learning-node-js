const express = require('express');
const path = require('path');

//access route directory from util folder
const rootDir = require('../util/path')

//access Router method from express
const router = express.Router();

// dummy database === empty array 
const users = []; 

router.get('/', (req,res,next) => {
    console.log(users)
    res.render('users',{
        pageTitle: 'CREATE USER ACCOUNT',
        path: '/',
        users: users
    })
})

router.post('/user', (req, res, next) => {
    users.push({ title: req.body.title})
    res.redirect('/');
})
exports.routes = router;
exports.users = users;