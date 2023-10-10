import { rootAggregator } from "../../src/messages/aggegators/root-aggregator.js";

const documentToMessageMapper = ({ doc }) => {
  return !doc
    ? undefined
    : Object.entries(doc).reduce((acc, [key, value]) => {
        if (key === "$oid") {
          return value;
        } else if (key === "$numberDouble") {
          const parsedNumber = Number.parseFloat(value);
          return isNaN(parsedNumber) ? undefined : parsedNumber;
        } else if (typeof value === "object") {
          acc[key] = documentToMessageMapper({ doc: value });
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});
};

const transformBodyToMessage = ({ body }) => {
  if (body?.meta?.fromMongoDb) {
    return documentToMessageMapper({ doc: body });
  } else {
    return body;
  }
};

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      // Process a POST request
      const body = req.body;
      console.log({ body });
      const message = transformBodyToMessage({ body });
      console.log({ message });
      // call aggregateObservers
      const result = await rootAggregator({ message });
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
