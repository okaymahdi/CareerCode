const { jobsCollection } = require('./jobs.model');

const getAllJobsService = async () => {
  try {
    const cursor = jobsCollection().find();
    const result = await cursor.toArray();
    return result;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

module.exports = {
  getAllJobsService,
};
