const asyncHandler = require('../../middlewares/async.middleware');
const jobsService = require('./jobs.service');

const getAllJobsController = asyncHandler(async (req, res) => {
  try {
    const jobs = await jobsService.getAllJobsService();
    res.send(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
});

module.exports = {
  getAllJobsController,
};
