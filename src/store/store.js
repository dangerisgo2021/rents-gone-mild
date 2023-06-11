import { createStore } from './createStore'

export const store = createStore({
  initialState: { session: 1 },
  rootReducer: (state) => state
})
console.log("created store", store.getState())