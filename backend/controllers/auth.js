const bcrypt = require('bcrypt')
const createError = require('../utils/Error')
const Users = require('../models/Users');
const jwt = require('jsonwebtoken');

// register
const register = async (req, res, next) => {
    try {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const password = bcrypt.hashSync(req.body.password, salt);
        const newUser = new Users({
            userName: req.body.name,
            email: req.body.email,
            password: password,
        })
        const saveUser = await newUser.save();
        console.log(saveUser);
        res.status(201).send(saveUser)
    } catch (error) {
        next(error);
    }
}

// login
const login = async (req, res, next) => {
    try {
        // checking user in the database by the userName or email
        // const user = Users.findOne({ $or: [{ userName: req.body.name }, { email: req.body.password }] })
        const user = await Users.findOne({ userName: req.body.name })
        if (!user) return next(createError(404, "User not found"));

        // if the user is find then check the password.
        const isPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isPassword) return next(createError(400, "wrong password or username!"))

        // create web token.
        const access_token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC,
            { "expiresIn": '3d' }
        )

        // save token in cookies.
        res.cookie("access_token", access_token, {
            httpOnly: true
        }).status(200).send({ ...user._doc, access_token })
    } catch (error) {
        next(error);
    }
}
module.exports = { register, login }