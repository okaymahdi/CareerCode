const express = require('express');
const {
  getAllJobsController,
  getJobByIdController,
  applyJobController,
  applicantQueryController,
} = require('../controllers/jobs.controller');

const jobRouter = express.Router();

// CRUD routes
jobRouter.get('/jobs', getAllJobsController);
jobRouter.get('/jobs/:id', getJobByIdController);
jobRouter.post('/applications', applyJobController);
jobRouter.get('/applications', applicantQueryController);

module.exports = {
  jobRouter,
};
