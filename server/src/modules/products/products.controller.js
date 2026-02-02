const asyncHandler = require('../../middlewares/async.middleware');
const jobsService = require('./jobs.service');

/**
 * Create Job
 */
const createJob = asyncHandler(async (req, res) => {
  const result = await jobsService.createJob(req.body);
  res.status(201).json(result);
});

/**
 * Get All Jobs
 */
const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await jobsService.getAllJobs();
  res.json(jobs);
});

/**
 * Get Job by ID
 */
const getJobById = asyncHandler(async (req, res) => {
  const job = await jobsService.getJobById(req.params.id);
  if (!job) return res.status(404).json({ message: 'Job not found' });
  res.json(job);
});

/**
 * Update Job
 */
const updateJob = asyncHandler(async (req, res) => {
  const result = await jobsService.updateJob(req.params.id, req.body);
  res.json(result);
});

/**
 * Delete Job
 */
const deleteJob = asyncHandler(async (req, res) => {
  const result = await jobsService.deleteJob(req.params.id);
  res.json(result);
});

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
};
