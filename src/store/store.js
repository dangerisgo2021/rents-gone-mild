import { createStore } from './utils/createStore'
import { storeConfig } from "./configs/store.config.js";

export const store = createStore(storeConfig)

console.debug("created store with initial state:", store.getState())