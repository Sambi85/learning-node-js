const express = require('express');
const path = require('path')
const rootDir = require('../util/path') 
const router = express.Router();
const products = [];  //<-- instead of DB, we are testing Data flow

router.get('/add-product',(req, res, next) => {
  res.sendFile(path.join(rootDir,'views', 'add-product.html'));
})

router.post("/add-product", (req, res, next) => {
    products.push({ title: req.body.title }) //<--- this enters a new obj to products array
    res.redirect("/");
  });

// module.exports = router; //<--- let's refactor

// individually export routes & products here, will refactor on app.js level
exports.routes = router;
exports.products = products;