import { connectToDatabase } from "../../../database/database.js";

export const userLoggedInAggregator = async ({ message }) => {
  // just upserting should create a user but upsert doesnt return the user id
  const { database } = await connectToDatabase();
  const userCollection = database.collection("users");
  // if user exists update last login date
  const query = { email: message.creator };
  // else create new user
  const update = { $set: { lastLogIn: message.created } };
  const options = { upsert: true };

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
