const express = require('express');
const {
  getAllJobsController,
  getJobByIdController,
} = require('./jobs.controller');
const jobRouter = express.Router();

// CRUD routes
jobRouter.get('/jobs', getAllJobsController);
jobRouter.get('/job/:id', getJobByIdController);

module.exports = jobRouter;
