const express = require('express');
const controller = require('./user.controller.js');

const userRouter = express.Router();
userRouter.post('/users', controller.createUser);
userRouter.get('/users', controller.getAllUsers);
userRouter.patch('/users', controller.updateLastSignInTime);
userRouter.delete('/users/:id', controller.deleteUser);

module.exports = userRouter;
