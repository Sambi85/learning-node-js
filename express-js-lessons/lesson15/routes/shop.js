const path = require('path')
const express = require('express')

productsController = require('../controllers/products') //<-- import

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.get("/", productsController.getProducts);

module.exports = router; 


