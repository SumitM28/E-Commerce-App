const Order = require("../models/Order");

// create Order
const createOrder = async (req, res, next) => {
    try {
        const newOrder = new Order(req.body);
        const saveOrder = await newOrder.save();
        res.status(201).json(saveOrder);
    } catch (error) {
        next(error);
    }
}

// update Order
const updateOrder = async (req, res, next) => {
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updateOrder);
    } catch (error) {
        next(error);
    }
}

// delete Order
const deleteOrder = async (req, res, next) => {
    try {
        await Order.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json("Order has been deleted");
    } catch (error) {
        next(error);
    }
}

// get Order
const getOrder = async (req, res, next) => {
    try {
        const getOrder = await Order.findById(req.params.id);
        res.status(200).json(getOrder);
    } catch (error) {
        next(error);
    }
}

// get All Order
const getAllOrder = async (req, res, next) => {
    try {
        const getAllOrders = await Order.find();
        res.status(200).json(getAllOrders);
    } catch (error) {
        next(error);
    }
}


module.exports = { createOrder, updateOrder, deleteOrder, getOrder, getAllOrder };