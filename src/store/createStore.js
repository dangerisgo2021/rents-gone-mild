export const createStore = ({ rootReducer, initialState }) => {
  let currentState = initialState;

  return {
    dispatch: (action) => {
      currentState = rootReducer(currentState, action);
      return currentState;
    },
    getState: () => currentState,
  };
};
