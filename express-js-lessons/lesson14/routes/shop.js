const path = require('path') //<-- core module for file paths

const express = require('express')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get("/", (req, res, next) => {
 const products = adminData.products;
 res.render('shop', {
     prods: products,
     pageTitle: 'Shop',
     path: '/',
    //  hasProducts: products.length > 0,
    //  activeShop: true,
    //  products: true
 })
});

module.exports = router; 