const Cart = require("../models/Cart");

// create Cart
const createCart = async (req, res, next) => {
    try {
        const newCart = new Cart(req.body);
        const saveCart = await newCart.save();
        res.status(201).json(saveCart);
    } catch (error) {
        next(error);
    }
}

// update Cart
const updateCart = async (req, res, next) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateCart);
    } catch (error) {
        next(error);
    }
}

// delete Cart
const deleteCart = async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json("Cart has been deleted");
    } catch (error) {
        next(error);
    }
}

// get Cart
const getCart = async (req, res, next) => {
    try {
        const getCart = await Cart.findById(req.params.id);
        res.status(200).json(getCart);
    } catch (error) {
        next(error);
    }
}

// get All Cart
const getAllCart = async (req, res, next) => {
    try {
        const getAllCarts = await Cart.find();
        res.status(200).json(getAllCarts);
    } catch (error) {
        next(error);
    }
}


module.exports = { createCart, updateCart, deleteCart, getCart, getAllCart };