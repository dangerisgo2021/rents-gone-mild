import { id as createRoomButtonClickedActionId  } from "../actions/create-room-button-clicked-action.js";
import { id as  joinRoomButtonClickedActionId } from "../actions/join-room-button-clicked-action.js";
import { createRoomAggregator } from "./create-room-aggregator.js";
import { joinRoomAggregator } from "./join-room-aggregator.js";

const messageIdToAggregatorMap = {
  [createRoomButtonClickedActionId]: createRoomAggregator,
  [joinRoomButtonClickedActionId]: joinRoomAggregator,
};

//aggregator functions will process the message by:
// update any domain objects, write to the database, and return all ids of messages created

export const wdwwAggregateWatcher = ({ message }) => {
  const aggregator = messageIdToAggregatorMap[message.messageId];
  if (aggregator) {
    return aggregator({ message });
  }
};
