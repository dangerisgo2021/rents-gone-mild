export const userLoggedInEventId = "user_logged_in";
export const userLoggedInEvent = () => {
  return {
    domain: "user",
    messageId: userLoggedInEventId,
    messageType: "event",
  };
};
