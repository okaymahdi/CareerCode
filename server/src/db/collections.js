let collections = {};

const setCollections = (db) => {
  collections.users = db.collection('users');
};

const getUsersCollection = () => collections.users;

module.exports = {
  setCollections,
  getUsersCollection,
};
