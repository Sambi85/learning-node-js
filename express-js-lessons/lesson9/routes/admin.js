const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log('Another Middleware');
    
    // change route to admin/add-product 
    const addProductForm = `
    <form action="admin/add-product" method="POST" >
        <input type="text" name="add product" placeholder="Add Product" />
        <button type="submit">Add Product</button>
    </form>
    `;
  res.send(addProductForm);
})

//change route to /add-product, NO need for admin as it's filtered out! 
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });

module.exports = router; 