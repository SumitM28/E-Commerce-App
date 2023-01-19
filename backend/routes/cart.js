const { createCart, updateCart, deleteCart, getCart, getAllCart } = require('../controllers/cart');
const { verifyUser, verifyAdmin } = require('../utils/TokenVarify');
const Router = require('express').Router();

// create Route
Router.post('/', verifyUser, createCart)

// update Route
Router.put('/:id', verifyUser, updateCart)
// delete Route
Router.delete('/:id', verifyUser, deleteCart)

// get Cart Route
Router.get('/:id', verifyUser, getCart)

// get all cart Route
Router.get('/', verifyAdmin, getAllCart)
module.exports = Router;