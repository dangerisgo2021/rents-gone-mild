const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
export const dbId = (id) => new mongodb.ObjectId(id);
const uri = process.env.MONGODB_URI;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let mongoClient = null;
let database = null;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.*");
}

export async function connectToDatabase() {
  try {
    if (mongoClient && database) {
      return { mongoClient, database };
    }
    if (process.env.NODE_ENV === "development") {
      if (!global._mongoClient) {
        mongoClient = await new MongoClient(uri, options).connect();
        global._mongoClient = mongoClient;
      } else {
        mongoClient = global._mongoClient;
      }
    } else {
      mongoClient = await new MongoClient(uri, options).connect();
    }
    database = await mongoClient.db(process.env.NEXT_ATLAS_DATABASE);

    return { mongoClient, database };
  } catch (e) {
    console.error(e);
  }
}
