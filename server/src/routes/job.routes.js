const express = require('express');
const {
  getAllJobsController,
  getJobByIdController,
  applyJobController,
} = require('../controllers/jobs.controller');

const jobRouter = express.Router();

// CRUD routes
jobRouter.get('/jobs', getAllJobsController);
jobRouter.get('/jobs/:id', getJobByIdController);
jobRouter.post('/jobs/apply', applyJobController);

module.exports = {
  jobRouter,
};
