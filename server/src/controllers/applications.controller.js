const { ObjectId } = require('mongodb');
const { getDB } = require('../config/db');
const asyncHandler = require('../middlewares/async.middleware');

/** Application Job Controller */
const applyJobController = asyncHandler(async (req, res) => {
  const db = getDB();
  const applicationsCollection = db.collection('applications');
  const application = req.body;
  console.log(application);
  const result = await applicationsCollection.insertOne(application);
  res.send(result);
});

/** Applicant query controller */
const applicantQueryController = asyncHandler(async (req, res) => {
  const db = getDB();
  const applicationsCollection = db.collection('applications');
  const email = req.query.email;

  const query = {
    applicant: email,
  };
  console.log(query);
  const cursor = applicationsCollection.find(query);

  const result = await cursor.toArray();

  for (const application of result) {
    const jobsCollection = db.collection('jobs');
    const jobId = application.jobId;
    const jobQuery = { _id: new ObjectId(jobId) };
    const job = await jobsCollection.findOne(jobQuery);
    application.company = job.company;
    application.title = job.title;
    application.company_logo = job.company_logo;
  }
  res.send(result);
});
/** Export the applyJobController function */
module.exports = {
  applyJobController,
  applicantQueryController,
};
