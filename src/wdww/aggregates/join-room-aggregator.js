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
    shouldAddPlayerToRoom = message?.creator && (!room.players || !room.players?.includes(message?.creator))
  } catch (err) {
    console.error(
      "joinRoomAggregator error",
      "await roomCollection.findOne({ _id: dbId(message?.payload?.roomId)})",
      err
    );
  }
  if(shouldAddPlayerToRoom) {
    try {
      await roomCollection.updateOne(
        {
          _id: dbId(message?.payload?.roomId),
        },
        { $addToSet: { players: message.creator } }
      );
    } catch (err) {
      console.error(
        "joinRoomAggregator error",
        "roomCollection.updateOne(room)",
        err
      );
    }
  }
  
};
