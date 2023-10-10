import { createAction } from "../../store/utils/create-action.js";

export const id = "create_room_button_clicked"

export const createRoomButtonClickedAction = createAction({
  domain: "wdww",
  messageId: id
});
