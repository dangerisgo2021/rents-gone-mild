import { ObjectId } from "mongodb";
import { connectToDatabase, dbId } from "../../database/database.js";

export const joinRoomAggregator = async ({ message }) => {
  // TODO: move to service
  const { database } = await connectToDatabase();
  const roomCollection = database.collection("room");
  const now = Date.now();

  let shouldAddPlayerToRoom = undefined;
  try {
    const room = await roomCollection.findOne({ _id: dbId(message?.payload?.roomId)})
    console.log({room})
    shouldAddPlayerToRoom = message?.creator && room.players.includes(message?.creator)
  } catch (err) {
    console.error(
      "createRoomAggregator error",
      "await roomCollection.findOne()",
      err
    );
  }
  if(shouldAddPlayerToRoom) {
    try {
      await roomCollection.updateOne(
        {
          _id: dbId(message?.payload?.roomId),
          $set: { updated: now,  $push: { players: message?.creator } }
        }
      );
    } catch (err) {
      console.error(
        "createRoomAggregator error",
        "roomCollection.insertOne(room)",
        err
      );
    }
  }
  
};
