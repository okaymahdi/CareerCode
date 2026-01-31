require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/database');
const { setCollections } = require('./db/collections');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  const client = await connectDB();
  const db = client.db(process.env.MONGO_DATABASE_NAME);

  setCollections(db);

  app.listen(PORT, () =>
    console.log(`🔥 Server running at http://localhost:${PORT}`),
  );
};

startServer();
