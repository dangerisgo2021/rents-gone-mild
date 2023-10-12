import { createAction } from "../../store/utils/create-action.js";

export const id = "join_room_button_clicked"

export const joinRoomButtonClickedAction = createAction({
  domain: "wdww",
  messageId: id
});
