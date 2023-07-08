import { userLoggedInEventId } from "../events/userLoggedInEvent.js";
import { userLoggedInAggregator } from "./userLoggedInAggregator.js";

const messageIdToAggregatorMap = {
  [userLoggedInEventId]: userLoggedInAggregator,
};

//aggregator functions will process the message by:
// update any domain objects, write to the database, and return all ids of messages created

export const userAggregateWatcher = ({ message }) => {
  const aggregator = messageIdToAggregatorMap[message.messageId];
  if (aggregator) {
    return aggregator({ message });
  }
};
