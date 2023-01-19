const Router = require('express').Router();
const { verifyAdmin } = require('../utils/TokenVarify');
const { createProduct, updateProduct, deleteProduct, getProduct, getProducts } = require('../controllers/product');

// create product
Router.post('/', verifyAdmin, createProduct)

// update product
Router.put('/:id', verifyAdmin, updateProduct)
// delete product
Router.delete('/:id', verifyAdmin, deleteProduct)

// get product
Router.get('/:id', getProduct)

// get products
Router.get('/', getProducts)

module.exports = Router;