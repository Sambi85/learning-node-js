const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        products.push(this); //<-- baked in method
    }

   static fetchAll() { // <-- static refers to class NOT instance of class
        return products;
    }
}