const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER_NAME}.cxax6la.mongodb.net/${process.env.MONGO_DATABASE_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectDB = async () => {
  if (!client.topology?.isConnected()) {
    await client.connect();
    console.log('✅ MongoDB Connected');
  }
  return client;
};

module.exports = { connectDB };
