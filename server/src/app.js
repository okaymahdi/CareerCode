const express = require('express');
const cors = require('cors');

const notFound = require('./middlewares/notFound.middleware');
const errorHandler = require('./middlewares/error.middleware');
const jobRouter = require('./modules/jobs/jobs.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('🚀 Career Code API is Running!');
});

/** Job Routes */
app.use('/jobs', jobRouter);

/** 404 Middleware */
app.use(notFound);

/** Error Middleware (must be last) */
app.use(errorHandler);

module.exports = app;
