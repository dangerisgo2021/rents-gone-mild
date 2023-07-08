import { connectToDatabase } from "../../database/database.js";

export const findProfileByUserIdService = async ({ userId }) => {
  const { database } = await connectToDatabase();
  const profileCollection = database.collection("profile");

  const profile = await profileCollection.findOne({ userId });

  return {
    ...profile,
    id: profile?._id,
  };
};
