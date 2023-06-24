import { useAuth0 } from "@auth0/auth0-react";
import { userLoggedInEvent } from "../../user/events/userLoggedInEvent.js";
import { sendMessage } from "../../messages/services/sendMessage.js";
import React from "react";
import { store } from "../../store/store.js";
import { useStore } from "../../store/hooks/useStore.js";
import { userLoggedInAction } from "../../user/actions/userLoggedInAction.js";

export const SessionProvider = ({ children }) => {
  const { dispatch } = useStore();
  const { user } = useAuth0();

  React.useEffect(() => {
    window.__GLOBAL_STORE__ = store;
    if (user) {
      const message = userLoggedInEvent();
      const options = {
        authorization: user.email,
      };
      dispatch(userLoggedInAction({ user }));
      sendMessage({ message, options }).catch((err) => {
        console.error(err, "sendMessage(userLoggedInEvent({user})) failed");
      });
    }
  }, [user]);

  return children;
};
