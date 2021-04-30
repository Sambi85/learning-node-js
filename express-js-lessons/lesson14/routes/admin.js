const express = require('express');
const productsController = require('../controllers/products'); //<-- Import here
const rootDir = require('../util/path') 
const router = express.Router();

router.get('/add-product', productsController.getAddProduct); //<-- reference here
router.post("/add-product", productsController.postAddProduct); //<-- reference here

module.exports = router;
// exports.products = products; // <--- not needed/ no array