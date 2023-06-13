export const userLoggedInEvent = () => {
  return {
    domain: "auth",
    messageId: "user_logged_in",
    messageType: "event",
  };
};
