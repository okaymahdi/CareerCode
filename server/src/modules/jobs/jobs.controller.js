const asyncHandler = require('../../middlewares/async.middleware');

const { getAllJobsService, getJobByIdService } = require('./jobs.service');

/** Get all jobs controller */
const getAllJobsController = asyncHandler(async (req, res) => {
  try {
    const jobs = await getAllJobsService();
    res.send(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
});

/** Get job by id controller */
const getJobByIdController = asyncHandler(async (req, res) => {
  const jobId = req.params.id;
  const job = await getJobByIdService(jobId);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  res.send(job);
});
module.exports = {
  getAllJobsController,
  getJobByIdController,
};
