import { id as createRoomButtonClickedActionId  } from "../actions/createRoomButtonClickedAction.js";
import { createRoomAggregator } from "./createRoomAggregator.js";

const messageIdToAggregatorMap = {
  [createRoomButtonClickedActionId]: createRoomAggregator,
};

//aggregator functions will process the message by:
// update any domain objects, write to the database, and return all ids of messages created

export const wdwwAggregateWatcher = ({ message }) => {
  const aggregator = messageIdToAggregatorMap[message.messageId];
  if (aggregator) {
    return aggregator({ message });
  }
};
