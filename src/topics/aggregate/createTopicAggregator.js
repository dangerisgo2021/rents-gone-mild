import { connectToDatabase } from "../../database/database.js";

export const createTopicAggregator = async ({ message }) => {
  const { database } = await connectToDatabase();
  const userCollection = database.collection("topic");
  const newTopic = { created: message.created, title: message?.payload?.title };

  try {
    await userCollection.insertOne(newTopic);
  } catch (err) {
    console.error(
      "createTopicAggregator error",
      "userCollection.insertOne(newTopic)",
      err
    );
  }
};
