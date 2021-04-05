const express = require('express');

// .Router() method a baked-in express method that organizes routes 
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log('Another Middleware');
    const addProductForm = `
    <form action="/product" method="POST" >
        <input type="text" name="add product" placeholder="Add Product" />
        <button type="submit">Add Product</button>
    </form>
    `;
  res.send(addProductForm);
})

// use in place of app, 
// router + .post() works the same 
router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/"); //<-- redirects to home page after form is filled and entered!
  });

module.exports = router; //<-- exports the routes from admin