const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

    title: {
        required: true,
        type: String,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
    },
    size: {
        type: Array
    },
    color: {
        type: Array,

    },
    price:{
        required:true,
        type:Number
    },
    rating:{
        type:Number
    },
    inStock:{
        type:Boolean,
        default:true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Products', ProductSchema);