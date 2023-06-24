import { createAction } from "../../store/utils/createAction.js";

export const userLoggedInAction = createAction({
  domain: "user",
  type: "loggedIn",
});

