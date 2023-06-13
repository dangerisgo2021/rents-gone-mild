import { createMessageFromHttpReq } from "../../src/messages/factories/createMessageFromHttpReq.js";
export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    console.log({ body: req.body });
    // create command
    const newMessage = createMessageFromHttpReq({ req });
    console.log({newMessage})
    // save to commands collection

    // return command id

    // trigger subscribers

    // process and create events

    // save events to event store
    res.status(200).json({ message: newMessage });
  } else {
    // Handle any other HTTP method
    res.status(400).json({ message: "only post is supported" });
  }
}
