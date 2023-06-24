import { userLoggedInAggregator } from "./userLoggedInAggregator.js";

const messageIdToAggregatorMap = {
  user_logged_in: userLoggedInAggregator,
};

//aggregator functions will process the message by:
// update any domain objects, write to the database, and return all ids of messages created

export const userAggregateWatcher = ({ message }) => {
  if (message?.domain === "user") {
    const aggregator = messageIdToAggregatorMap[message.messageId];

    return aggregator({ message });
  }
};
