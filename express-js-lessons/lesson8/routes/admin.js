const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log('Another Middleware');

    const addProductForm = `
    <form action="admin/add-product" method="POST" >
        <input type="text" name="add product" placeholder="Add Product" />
        <button type="submit">Add Product</button>
    </form>
    `;
  res.send(addProductForm);
})

router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });

module.exports = router; 