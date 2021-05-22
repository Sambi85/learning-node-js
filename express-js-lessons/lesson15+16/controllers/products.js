const Product = require('../models/product')
//<-- moved products array

exports.getAddProduct = (req, res, next) => {
  res.render('/add-product', { 
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title); // <-- create new product based on class
  product.save() //<-- class method, pushes data on to product array
    res.redirect("/");
};

exports.getProducts = (req, res, next) => { 
  const products = Product.fetchAll(); // <-- grab all instances of Products class
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        products: true
  })
};




