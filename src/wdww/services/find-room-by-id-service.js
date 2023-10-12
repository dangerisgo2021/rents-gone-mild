import { connectToDatabase, dbId } from "../../database/database.js";


export const findRoomByIdService = async ({ roomId }) => {
  const { database } = await connectToDatabase();
  const roomCollection = database.collection("room");
  
  const room = await roomCollection.findOne({ _id: dbId(roomId) });

  return !room ? undefined : {
    ...room,
    id: room?._id,
  };
};
