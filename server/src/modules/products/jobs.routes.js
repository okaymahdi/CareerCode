const express = require('express');
const procutRouter = express.Router();
const jobsController = require('./jobs.controller');

// CRUD routes
procutRouter.post('/', jobsController.createJob);
procutRouter.get('/', jobsController.getAllJobs);
procutRouter.get('/:id', jobsController.getJobById);
procutRouter.put('/:id', jobsController.updateJob);
procutRouter.delete('/:id', jobsController.deleteJob);

module.exports = procutRouter;
