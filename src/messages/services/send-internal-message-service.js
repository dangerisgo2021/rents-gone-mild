import { createMessageFromService } from "../factories/create-message-from-service.js";
import { saveMessageService } from "./save-message-service.js";

export const sendInternalMessageService = async ({ message, creator }) => {
  const newMessage = createMessageFromService({ message, creator });

  try {
    await saveMessageService({ message: newMessage });
  } catch (err) {
    console.error(err);
  }
};
