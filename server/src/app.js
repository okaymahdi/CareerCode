const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const notFound = require('./middlewares/notFound.middleware');
const errorHandler = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send('🚀 Coffee Shop API is running!');
});

app.use(routes);

/** 404 Middleware */
app.use(notFound);

/** Error Middleware (must be last) */
app.use(errorHandler);

module.exports = app;
