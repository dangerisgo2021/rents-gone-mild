import { createAction } from "../../store/utils/create-action.js";

export const profileFormUpdatedAction = createAction({
  domain: "profile",
  messageId: "profileFormUpdatedAction",
});
