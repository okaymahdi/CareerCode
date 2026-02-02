const express = require('express');
const jobRouter = express.Router();
const jobsController = require('./jobs.controller');

// CRUD routes
jobRouter.get('/', jobsController.getAllJobsController);

module.exports = jobRouter;
