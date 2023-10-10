import { createAction } from "../../store/utils/create-action.js";

export const userLoggedInAction = createAction({
  domain: "user",
  messageId: "loggedIn",
});

