import { sendClientMessage } from "../../client/services/sendClientMessage.js";

export const sendActionSubscription = (state, action) => {
  if(action?.meta?.sendToServer) {
  
    const options = {
      authorization: state?.user?.email,
    };
    console.log("sending to server", {action, state})
    sendClientMessage({ message: action, options }).catch((err) => {
      console.error(err, "sendMessage(userLoggedInEvent({user})) failed");
    });
  }
  
}