import { connectToDatabase } from "../../database/database.js";
import { sendInternalMessageService } from "../../messages/services/send-internal-message-service.js";
import { userCreatedEvent } from "../events/user-created-event.js";

export const userLoggedInAggregator = async ({ message }) => {
  // TODO: move to repo
  const { database } = await connectToDatabase();
  const userCollection = database.collection("users");
  const query = { email: message.creator };
  const update = { $set: { lastLogIn: message.created } };
  // upserting means that the first login for an email will create a new user
  const options = { upsert: true };
  // TODO: move to service
  let result = undefined;
  try {
    result = await userCollection.updateOne(query, update, options);
  } catch (err) {
    console.error(
      "userLoggedInAggregator error",
      "userCollection.updateOne(query, update, options)",
      err
    );
  }
  // when upsertedId has value it means a new user was created
  if (result?.upsertedId) {
    const message = userCreatedEvent({ userId: result?.upsertedId });
    await sendInternalMessageService({
      message,
      creator: "userLoggedInAggregator",
    });
  }
};
