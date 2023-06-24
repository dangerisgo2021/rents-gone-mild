import { createAction } from "../../store/utils/createAction.js";

export const profileFormUpdatedAction = createAction({
  domain: "profile",
  type: "profileFormUpdatedAction",
});
