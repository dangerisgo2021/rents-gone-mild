import { connectToDatabase } from "../../database/database.js";

export const saveMessageService = async ({ message }) => {
  const { database } = await connectToDatabase();
  const collection = database.collection("messages");
  const result = await collection.insertOne(message);

  return result?.insertedId;
};
