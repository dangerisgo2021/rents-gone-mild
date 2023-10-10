import { createAction } from "../../store/utils/createAction.js";

export const id = "create_room_button_clicked"

export const createRoomButtonClickedAction = createAction({
  domain: "wdww",
  messageId: id
});
