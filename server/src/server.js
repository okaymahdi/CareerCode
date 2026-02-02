require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/database.js');
const { setCollections } = require('./db/collections.js');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    const client = await connectDB();
    const myDB = client.db(process.env.MONGO_DATABASE_NAME);

    setCollections(myDB);

    app.listen(PORT, () =>
      console.log(`🔥 Server running at http://localhost:${PORT}`),
    );
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};
startServer();
