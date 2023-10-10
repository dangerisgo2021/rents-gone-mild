import { createAction } from "../../store/utils/create-action.js";

export const profileFormSubmittedAction = createAction({
  domain: "profile",
  messageId: "profileFormSubmittedAction",
});
