const products = []; //<-- moved products array

exports.getAddProduct = (req, res, next) => {
  res.render('/add-product', { //<--- exported get
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
  });
};


exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title }) //<--- exported post
    res.redirect("/");
};

exports.getProducts = (req, res, next) => { //<--- moved from shop.js
    // const products = adminData.products; 
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        products: true
  })
};




