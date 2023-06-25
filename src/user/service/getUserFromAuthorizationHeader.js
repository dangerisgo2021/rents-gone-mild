import { connectToDatabase } from "../../database/database.js";

export const getUserFromAuthorizationHeaderService = async ({
  authenticationHeader,
}) => {
  const { database } = await connectToDatabase();
  const userCollection = database.collection("users");
  const result = await userCollection.findOne({ email: authenticationHeader });
  return result._id;
};
