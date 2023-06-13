export const createMessageFromHttpReq = ({ req }) => {
  const { body, headers } = req;
  const { messageType, payload, messageId, domain } = JSON.parse(body);
  const now = Date.now();

  return {
    messageId,
    creator: headers.authorization, //exchange access token for creator later
    created: now,
    updated: now,
    domain,
    messageType, // [command, event, doc]
    payload,
  };
};
