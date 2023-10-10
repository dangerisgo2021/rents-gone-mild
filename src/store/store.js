import { sendActionSubscription } from "./subscriptions/send-action-subscription.js";
import { createStore } from './utils/createStore'
import { storeConfig } from "./configs/store.config.js";

export const store = createStore(storeConfig)

store.subscribe(sendActionSubscription)

console.debug("created store with initial state:", store.getState())