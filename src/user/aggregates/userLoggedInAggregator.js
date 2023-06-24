import { connectToDatabase } from "../../database/database.js";

export const userLoggedInAggregator = async ({ message }) => {
  // TODO: move to repo
  const { database } = await connectToDatabase();
  const userCollection = database.collection("users");
  const query = { email: message.creator };
  const update = { $set: { lastLogIn: message.created } };
  // upserting means that the first login for an email will create a new user
  const options = { upsert: true };
  // TODO: move to service
  try {
    await userCollection.updateOne(query, update, options);
  } catch (err) {
    console.error(
      "userLoggedInAggregator error",
      "userCollection.updateOne(query, update, options)",
      err
    );
  }
};
