const path = require('path') //<-- core module for file paths

const express = require('express')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get("/", (req, res, next) => {
    console.log('shop.js', adminData.products) // <--- testing out reading products
    res.sendFile(path.join(rootDir,'views', 'shop.html')); //send a file to user using file path
    // first arg = __dirname is absoulute directory, use 2 underscores!!!
    // second arg = next folder
    // third arg = target file
    // .join() concats the string
    // path + .join() = detects which system you are using, windows or linux

});

module.exports = router; 