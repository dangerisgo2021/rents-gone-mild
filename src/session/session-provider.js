import { useAuth0 } from "@auth0/auth0-react";
import { userLoggedInEvent } from "../messages/user/events/userLoggedInEvent.js";
import { sendMessage } from "../messages/sendMessage.js";
import React from "react";

export const SessionProvider = ({ children }) => {
  const { user } = useAuth0();

  React.useEffect(() => {
    if (user) {
      const message = userLoggedInEvent();
      const options = {
        authorization: user.email,
      };
      sendMessage({ message, options }).catch((err) => {
        console.error(err, "sendMessage(userLoggedInEvent({user})) failed");
      });
    }
  }, [user]);

  return children;
};
