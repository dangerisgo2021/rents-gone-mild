import { rootAggregator } from "../../src/domains/rootAggregator.js";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // Process a POST request
      const body = req.body;
      console.log({ body });
      
      // call aggregateObservers
      const result = await rootAggregator({ message: body })
      // since we need the serverless function to live we have to wait till process completes to respond
      // this endpoint is what should convert into an message queue with subscribers
      res.status(200).json({ result });
    } else {
      // Handle any other HTTP method
      res.status(400).json({ message: "only post is supported" });
    }
  } catch (err) {
    console.error("aggregate error: ", err);
    res.status(500).json({ message: "something when wrong RAFO" });
  }
}
