const Product = require('../models/Products');

// create product
const createProduct = async (req, res, next) => {
    try {
        const newProduct = new Product(req.body);
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct);
    } catch (error) {
        next(error);
    }
}

// update product
const updateProduct = async (req, res, next) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        // console.log(updateProduct)
        res.status(200).json(updateProduct)
    } catch (error) {
        next(error);
    }
}

// delete product
const deleteProduct = async (req, res, next) => {
    try {
        await Product.findByIdAndDelete({_id:req.params.id})
        res.status(200).json("product has been deleted");
    } catch (error) {
        next(error);
    }
}

// get product
const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        // console.log(product)
        res.status(200).json(product)
    } catch (error) {
        next(error);
    }
}
// get all product
const getProducts = async (req, res, next) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                }
            })
        } else {
            products = await Product.find();
        }
        res.status(200).json(products)
    } catch (error) {
        next(error);
    }
}
module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getProducts }