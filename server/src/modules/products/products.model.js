const { getDB } = require('../../config/db');

const jobsCollection = () => {
  return getDB().collection('jobs');
};

module.exports = {
  jobsCollection,
};
