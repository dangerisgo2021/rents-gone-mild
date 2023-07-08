import { createMessageFromService } from "../factories/createMessageFromService.js";
import { saveMessageService } from "./saveMessageService.js";

export const sendInternalMessageService = async ({ message, creator }) => {
  const newMessage = createMessageFromService({ message, creator });

  try {
    await saveMessageService({ message: newMessage });
  } catch (err) {
    console.error(err);
  }
};
