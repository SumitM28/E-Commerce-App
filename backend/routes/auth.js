const Router = require('express').Router();
const {register,login} =require('../controllers/auth')

// Register user
Router.post('/register',register)

// login user
Router.post('/login',login)


module.exports = Router