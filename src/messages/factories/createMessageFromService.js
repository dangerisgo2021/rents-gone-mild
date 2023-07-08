export const createMessageFromService = ({ message, creator }) => {
  const { messageType, payload, messageId, domain } = message;
  const now = Date.now();

  return {
    messageId, // user_created
    creator,
    created: now,
    domain,
    messageType, // [command, event, doc]
    payload,
  };
};
