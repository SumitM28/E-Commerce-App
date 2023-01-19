const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({

    userId: {
        required: true,
        type: String,
    },
    products:[
        {
            productId:{
                type:String,
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
    price:{
        type:Number,
        require:true
    },
    address:{
        type:Object
    },
    status:{
        type:String,
        default:"pending"
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema);