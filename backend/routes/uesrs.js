const Router = require('express').Router();
const { updateUser,deleteUser,getUser,getUsers } = require('../controllers/users');
const {verifyUser ,verifyAdmin} = require('../utils/TokenVarify')


// Update route.
Router.put('/:id', verifyUser, updateUser);

// Delete route.
Router.delete('/:id', verifyUser, deleteUser);

// GET
Router.get('/:id',verifyUser, getUser)
// GET ALL
Router.get('/',verifyAdmin, getUsers)

module.exports = Router;
