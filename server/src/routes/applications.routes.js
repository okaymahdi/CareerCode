const express = require('express');
const {
  applyJobController,
  applicantQueryController,
} = require('../controllers/applications.controller');

const applicationRouter = express.Router();

applicationRouter.post('/applications', applyJobController);
applicationRouter.get('/applications', applicantQueryController);

module.exports = {
  applicationRouter,
};
