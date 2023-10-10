import { userLoggedInEventId } from "../events/user-logged-in-event.js";
import { userLoggedInAggregator } from "./user-logged-in-aggregator.js";

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
