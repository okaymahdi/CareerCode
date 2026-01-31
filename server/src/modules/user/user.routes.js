const router = require('express').Router();
const controller = require('./user.controller');

router.post('/users', controller.createUser);
router.get('/users', controller.getAllUsers);
router.patch('/users', controller.updateLastSignInTime);
router.delete('/users/:id', controller.deleteUser);

module.exports = router;
