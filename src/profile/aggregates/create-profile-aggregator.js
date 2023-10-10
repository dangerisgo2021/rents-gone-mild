import { connectToDatabase } from "../../database/database.js";

export const createProfileAggregator = async ({ message }) => {
  // TODO: move to service
  const { database } = await connectToDatabase();
  const profileCollection = database.collection("profile");
  const now = Date.now();

  const profile = {
    username: "",
    userId: message?.payload?.userId,
    created: now,
  };

  try {
    await profileCollection.insertOne(profile);
  } catch (err) {
    console.error(
      "userLoggedInAggregator error",
      "userCollection.updateOne(query, update, options)",
      err
    );
  }
};
