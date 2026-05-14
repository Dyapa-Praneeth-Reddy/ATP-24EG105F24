///////////////////////////////////// --product API-- ////////////////////////////
// Create REST API for Product resource with below operations:

 
//         1. Create new Product({productId,name,brand,price})
//         2. Read all products
//         3. Read all Product by brand
//         4. Update a product
//         5. Delete a product by id

import exp from "express";
export const productApp = exp.Router();

productApp.use(exp.json());

//create product api with below operations
let products = [];

// Task 1: Create new Product({productId,name,brand,price})
productApp.post('/product', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json({ message: "product created successfully", product: newProduct });
});


// Task 2: Read all products
    productApp.get('/products', (req, res) => {
    res.json({ message: "all products", products: products });
});


// Task 3: Read all Product by brand
productApp.get('/products/brand/:brand', (req, res) => {
    let brandOfUrl = req.params.brand;
    //find product by brand
    let foundProduct = products.find((productObj) => productObj.brand === brandOfUrl);
    if (!foundProduct) {
        return res.json({ message: "product not found" });
    }
    //send response to client
    res.json({ message: "product found", payload: foundProduct });
});


// Task 4: Update a product
productApp.put('/products', (req, res) => {
    const modifiedProduct = req.body;
    let index = products.findIndex((productObj) => productObj.productId === modifiedProduct.productId);
    if (index === -1) {
        return res.json({ message: "product not found" });
    }
    products.splice(index, 1, modifiedProduct);
    res.json({ message: "product updated successfully", updated_product: modifiedProduct });
});


// Task 5: Delete a product by id
productApp.delete('/products/:id', (req, res) => {
    let idOfUrl = Number(req.params.id);
    let index = products.findIndex((productObj) => productObj.productId === idOfUrl);
    if (index === -1) {
        return res.json({ message: "product not found" });
    }
    products.splice(index, 1);
    res.json({ message: "product deleted successfully" });
});