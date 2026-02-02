const asyncHandler = require('../../middlewares/async.middleware.js');
const userService = require('./user.service.js');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  res.send(result);
};

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

const updateLastSignInTime = asyncHandler(async (req, res) => {
  const { email, lastSignInTime } = req.body;
  const result = await userService.updateLastSignInTime(email, lastSignInTime);
  res.send(result);
});

const deleteUser = asyncHandler(async (req, res) => {
  const result = await userService.deleteUser(req.params.id);
  res.send(result);
});

module.exports = {
  createUser,
  getAllUsers,
  updateLastSignInTime,
  deleteUser,
};
