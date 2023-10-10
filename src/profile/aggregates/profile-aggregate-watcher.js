import { userCreatedEventId } from "../../user/events/user-created-event.js";
import { createProfileAggregator } from "./create-profile-aggregator.js";

const messageIdToAggregatorMap = {
  [userCreatedEventId]: createProfileAggregator,
};

//aggregator functions will process the message by:
// update any domain objects, write to the database, and return all ids of messages created

export const profileAggregateWatcher = ({ message }) => {
  const aggregator = messageIdToAggregatorMap[message.messageId];
  if (aggregator) {
    return aggregator({ message });
  }
};
