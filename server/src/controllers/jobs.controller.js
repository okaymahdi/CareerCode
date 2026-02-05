const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');
const asyncHandler = require('../middlewares/async.middleware');

/** Add Job Controller */
const addJobController = asyncHandler(async (req, res) => {
  const db = getDB();
  const jobsCollection = db.collection('jobs');
  const job = req.body;
  const result = await jobsCollection.insertOne(job);
  res.send(result);
});

/** Get All Jobs From Database Controller */
const getAllJobsController = asyncHandler(async (req, res) => {
  const db = getDB();
  const jobsCollection = db.collection('jobs');
  const cursor = jobsCollection.find();
  const jobs = await cursor.toArray();
  res.send(jobs);
});

/** Get Job By ID From Database Controller */
const getJobByIdController = asyncHandler(async (req, res) => {
  const db = getDB();
  const jobsCollection = db.collection('jobs');
  const jobId = req.params.id;
  const query = { _id: new ObjectId(jobId) };
  const job = await jobsCollection.findOne(query);
  if (!job) return res.status(404).json({ error: 'Job not found' });
  res.send(job);
});

/** Export the applyJobController function */
module.exports = {
  addJobController,
  getAllJobsController,
  getJobByIdController,
};
