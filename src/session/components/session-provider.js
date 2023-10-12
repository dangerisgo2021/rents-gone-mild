import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { store } from "../../store/store.js";
import { useStore } from "../../store/hooks/use-store.js";
import { userLoggedInAction } from "../../user/actions/user-logged-in-action.js";

export const SessionProvider = ({ children }) => {
  const { dispatch } = useStore();
  const { user } = useAuth0();

  React.useEffect(() => {
    window.__GLOBAL_STORE__ = store;
    if (user) {
      dispatch(userLoggedInAction({ user }, {sendToServer: false })); // !location.hostname.includes("localhost")
      // sendClientMessage({ message, options }).catch((err) => {
      //   console.error(err, "sendMessage(userLoggedInEvent({user})) failed");
      // });
    }
  }, [user]);

  return children;
};
