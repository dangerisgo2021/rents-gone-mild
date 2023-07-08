export const userCreatedEventId = "user_created";
export const userCreatedEvent = (payload) => {
  return {
    domain: "user",
    messageId: userCreatedEventId,
    messageType: "event",
    payload,
  };
};
