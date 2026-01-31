const { ObjectId } = require('mongodb');
const { getUsersCollection } = require('../../db/collections');
const bcrypt = require('bcrypt');

const createUser = async (data) => {
  const usersCollection = getUsersCollection();

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(data.password, salt);

  return usersCollection.insertOne({
    ...data,
    password: hashedPassword,
  });
};

const getAllUsers = async () => {
  return getUsersCollection().find().toArray();
};

const updateLastSignInTime = async (email, time) => {
  return getUsersCollection().updateOne(
    { email },
    { $set: { lastSignInTime: time } },
  );
};

const deleteUser = async (id) => {
  return getUsersCollection().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createUser,
  getAllUsers,
  updateLastSignInTime,
  deleteUser,
};
