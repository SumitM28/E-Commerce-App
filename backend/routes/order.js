const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrder } = require('../controllers/order');
const { verifyUser, verifyAdmin } = require('../utils/TokenVarify');
const Router = require('express').Router();

// create Route
Router.post('/', verifyUser, createOrder)

// update Route
Router.put('/:id', verifyUser, updateOrder)
// delete Route
Router.delete('/:id', verifyUser, deleteOrder)

// get Cart Route
Router.get('/:id', verifyUser, getOrder)

// get all cart Route
Router.get('/', verifyAdmin, getAllOrder)
module.exports = Router;