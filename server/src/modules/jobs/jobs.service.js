const { ObjectId } = require('mongodb');
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

/** Get job by id service */
const getJobByIdService = async (id) => {
  try {
    const jobId = new ObjectId(id);
    const query = { _id: jobId };
    const job = await jobsCollection().findOne(query);
    return job;
  } catch (error) {
    console.error('Error fetching job by id:', error);
    throw error;
  }
};

module.exports = {
  getAllJobsService,
  getJobByIdService,
};
