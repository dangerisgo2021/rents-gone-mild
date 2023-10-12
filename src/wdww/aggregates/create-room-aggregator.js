import { connectToDatabase } from "../../database/database.js";

export const createRoomAggregator = async ({ message }) => {
  // TODO: move to service
  const { database } = await connectToDatabase();
  const roomCollection = database.collection("room");
  const now = Date.now();

  const room = {
    player: [],
    status: "created",
    created: now,
    creator: message.creator
  };

  try {
    await roomCollection.insertOne(room);
  } catch (err) {
    console.error(
      "createRoomAggregator error",
      "roomCollection.insertOne(room)",
      err
    );
  }
};
