import { createTopicAggregator } from "./createTopicAggregator.js";

const messageIdToAggregatorMap = {
  create_topic: createTopicAggregator,
};

//aggregator functions will process the message by:
// update any domain objects, write to the database, and return all ids of messages created

export const topicsAggregateWatcher = ({ message }) => {
  if (message?.domain === "topics") {
    const aggregator = messageIdToAggregatorMap[message.messageId];

    return aggregator({ message });
  }
};
