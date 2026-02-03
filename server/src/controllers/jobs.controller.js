const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');
const asyncHandler = require('../middlewares/async.middleware');

/** Get All Jobs From Database Controller */
const getAllJobsController = async (req, res) => {
  try {
    const db = getDB();
    const jobsCollection = db.collection('jobs');
    const cursor = jobsCollection.find();
    const jobs = await cursor.toArray();
    res.send(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

/** Get Job By ID From Database Controller */
const getJobByIdController = async (req, res) => {
  try {
    const db = getDB();
    const jobsCollection = db.collection('jobs');
    const jobId = req.params.id;
    const query = { _id: new ObjectId(jobId) };
    const job = await jobsCollection.findOne(query);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.send(job);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

/** Application Job Controller */
const applyJobController = asyncHandler(async (req, res) => {
  const db = getDB();
  const applicationsCollection = db.collection('applications');
  const application = req.body;
  console.log(application);
  const result = await applicationsCollection.insertOne(application);
  res.status(201).json({
    message: 'Application submitted successfully',
    applicationId: result.insertedId,
    result,
  });
});

/** Export the applyJobController function */
module.exports = {
  getAllJobsController,
  getJobByIdController,
  applyJobController,
};
