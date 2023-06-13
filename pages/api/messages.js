import { connectToDatabase } from "../../src/database/database.js";
import { createMessageFromHttpReq } from "../../src/messages/factories/createMessageFromHttpReq.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    console.log({ body: req.body });
    // create command
    const newMessage = createMessageFromHttpReq({ req });
    // save to commands collection
    const { database } = await connectToDatabase();
    const collection = database.collection("messages");
    const insertResult = await collection.insertOne(newMessage);

    // return message back to sender as receipt
    res
      .status(200)
      .json({ ...newMessage, id: insertResult.insertedId, _id: undefined });

    // trigger subscribers

    // process and create events

    // save events to event store

    //response
  } else {
    // Handle any other HTTP method
    res.status(400).json({ message: "only post is supported" });
  }
}
