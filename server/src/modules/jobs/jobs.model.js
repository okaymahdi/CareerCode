const { getDB } = require('../../config/db');

const jobsCollection = () => {
  const myDB = getDB();
  const myCollection = myDB.collection('jobs');
  return myCollection;
};

module.exports = {
  jobsCollection,
};
