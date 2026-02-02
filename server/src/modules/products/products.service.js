const { ObjectId } = require('mongodb');
const { jobsCollection } = require('./jobs.model');

/**
 * Create a new job
 */
const createJob = async (data) => {
  const result = await jobsCollection().insertOne({
    ...data,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  return result;
};

/**
 * Get all jobs
 */
const getAllJobs = async () => {
  return jobsCollection().find().toArray();
};

/**
 * Get a single job by id
 */
const getJobById = async (id) => {
  return jobsCollection().findOne({ _id: new ObjectId(id) });
};

/**
 * Update a job by id
 */
const updateJob = async (id, data) => {
  return jobsCollection().updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...data, updatedAt: new Date() } },
  );
};

/**
 * Delete a job by id
 */
const deleteJob = async (id) => {
  return jobsCollection().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};
