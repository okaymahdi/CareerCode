const asyncHandler = require('../../middlewares/async.middleware');
const userService = require('./user.service');

const createUser = async (req, res) => {
  const result = await userService.createUser(req.body);
  res.send(result);
};

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await service.getAllUsers();
  res.json(users);
});

const updateLastSignInTime = async (req, res) => {
  const { email, lastSignInTime } = req.body;
  const result = await userService.updateLastSignInTime(email, lastSignInTime);
  res.send(result);
};

const deleteUser = async (req, res) => {
  const result = await userService.deleteUser(req.params.id);
  res.send(result);
};

module.exports = {
  createUser,
  getAllUsers,
  updateLastSignInTime,
  deleteUser,
};
