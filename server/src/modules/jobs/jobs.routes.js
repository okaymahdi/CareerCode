const express = require('express');
const {
  getAllJobsController,
  getJobByIdController,
} = require('./jobs.controller');
const jobRouter = express.Router();

// CRUD routes
jobRouter.get('/', getAllJobsController);
jobRouter.get('/:id', getJobByIdController);

module.exports = jobRouter;
