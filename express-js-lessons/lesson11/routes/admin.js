const express = require('express');
const path = require('path') //<-- core module for file paths
const rootDir = require('../util/path')//<-- root directory const, cleaner code 
const router = express.Router();



router.get('/add-product',(req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views', 'add-product.html'));
})
// Refactor: Deleted form variable and res.send(), add-product.html has us covered!

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });

module.exports = router; 