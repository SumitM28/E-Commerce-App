const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const createError = require('../utils/Error');

// update user
const updateUser = async (req, res, next) => {

    const { password}={...req.body};
    if(password){
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const password = bcrypt.hashSync(req.body.password, salt);
        req.body.password=password
    }

    try {
        const updateUser = await Users.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            { new: true });

        
        res.json(updateUser);
        next();
    } catch (error) {
        next(error)
    }
}

// delete user
const deleteUser = async (req, res, next) => {

    try {
        await Users.findByIdAndDelete({_id:req.params.id})
        res.status(200).send("User have been deleted!")
        next();
    } catch (error) {
        next(error);
    }
}

// get user
const getUser = async (req, res, next) => {

    try {
        const user=await Users.find({_id:req.params.id})
        res.status(200).json(user);
        next();
    } catch (error) {
        next(error);
    }
}


// get users all
const getUsers = async (req, res, next) => {

    try {
        const users=await Users.find()
        res.status(200).json(users);
        next();
    } catch (error) {
        next(error);
    }
}
module.exports = { updateUser,deleteUser,getUser ,getUsers};