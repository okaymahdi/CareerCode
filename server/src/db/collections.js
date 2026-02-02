let collections = {};

const setCollections = (myDB) => {
  collections.users = myDB.collection('users');
  collections.orders = myDB.collection('orders');
  collections.products = myDB.collection('products');
};

const getUsersCollection = (name) => {
  const collection = collections[name];
  if (!collection) {
    throw new Error(`Collection "${name}" not found`);
  }
  return collection;
};

module.exports = {
  setCollections,
  getUsersCollection,
};
