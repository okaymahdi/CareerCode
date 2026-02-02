require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db.js');
const { setCollections } = require('./db/collections.js');

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    // 1️⃣ MongoDB connect
    const client = await connectDB();

    // 2️⃣ Database select
    const myDB = client.db(process.env.MONGO_DATABASE_NAME);

    // 3️⃣ All collections register
    setCollections(myDB);

    /** List Collections */
    const collections = await myDB.listCollections().toArray();
    console.log('📂 Collections in DB:');
    collections.forEach((c) => console.log(' -', c.name));

    // 4️⃣ Start express server
    app.listen(PORT, () => {
      console.log(`🔥 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};
startServer();
