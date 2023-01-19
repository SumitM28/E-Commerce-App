const jwt = require('jsonwebtoken');
const  createError  = require('../utils/Error')

// verify token
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;

    // if token is false 
    if (!token) {
        return next(createError(401,"You are not authenticated!"));
    }

    // verifyt the token
    jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
        if(err){
            return next(createError(403,'Tokon is not valid!'))
        }else{
            req.user=user;
            next();
        }
    })

}

// verify user
const verifyUser=(req,res,next)=>{

    verifyToken(req,res,()=>{
     if(req.user.id==req.params.id || req.user.isAdmin){
        next();
     }else{
        next(createError(403,"You are not autherized!"))
     }
    })
}
// verify admin
const verifyAdmin=(req,res,next)=>{

    verifyToken(req,res,()=>{
    if(req.user.isAdmin){
        next();
    }else{
        next(createError(403,"You are not autherized!"))
    }
    })
}

module.exports = {
    verifyUser,
    verifyAdmin
}