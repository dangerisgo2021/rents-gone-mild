import { createMessageFromHttpReq } from "../../src/messages/factories/createMessageFromHttpReq.js";
import { saveMessageService } from "../../src/messages/services/saveMessageService.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    console.log({ body: req.body });
    // create command
    const newMessage = createMessageFromHttpReq({ req });
    // save to commands collection
    try {
      const messageId = await saveMessageService({ message: newMessage });
      res.status(200).json({ ...newMessage, id: messageId });
    } catch (e) {
      console.error(e);
      res.status(500).json("saveMessage failed");
    }
  } else {
    // Handle any other HTTP method
    res.status(400).json({ message: "only post is supported" });
  }
}
