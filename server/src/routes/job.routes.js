const express = require('express');
const {
  getAllJobsController,
  getJobByIdController,
  addJobController,
} = require('../controllers/jobs.controller');

const jobRouter = express.Router();

// CRUD routes
jobRouter.post('/jobs', addJobController);
jobRouter.get('/jobs', getAllJobsController);
jobRouter.get('/jobs/:id', getJobByIdController);

module.exports = {
  jobRouter,
};
