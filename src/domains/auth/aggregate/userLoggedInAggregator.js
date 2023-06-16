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

  let result = undefined;
  try {
    result = await userCollection.findOneAndUpdate(query, update, options);
  } catch (err) {
    console.error(
      "userLoggedInAggregator error",
      "userCollection.updateOne(query, update, options)",
      err
    );
  }

  // return user id
  return {
    aggregator: "userLoggedInAggregator",
    userId: result?.value?._id,
  };
};
