const express=require('express');
const mongoose=require('mongoose');
const dotenv= require('dotenv');
const app=express();
const userRoute=require('../backend/routes/uesrs');
const authRoute =require('../backend/routes/auth');
const productRoute =require('../backend/routes/products');
const cartRoute =require('../backend/routes/cart');
const orderRoute =require('../backend/routes/order');
const cookieParser=require('cookie-parser');
const cors=require('cors');  // it help to communicate one website to another website.
dotenv.config();

mongoose.set('strictQuery',false)
const connect = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
        mongoose.set('strictQuery',false)
        console.log('database has been connect')
    } catch (error) {
        console.log(error);
    }

}
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// Routes
app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/products',productRoute);
app.use('/api/cart',cartRoute);
app.use('/api/order',orderRoute);

// error handling using middleware.
app.use((err,req,res,next)=>{
    const errorStatus=err.status || 500;
    const errorMessage=err.message || "!Something went wrong!"

    res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack
    })
})

app.listen(process.env.PORT|| 4500,()=>{
    connect();
    console.log(`server has been started on the port ${process.env.PORT}`);
})