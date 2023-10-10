import { createAction } from "../../store/utils/createAction.js";

export const profileFormSubmittedAction = createAction({
  domain: "profile",
  messageId: "profileFormSubmittedAction",
});
