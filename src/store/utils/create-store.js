export const createStore = ({ rootReducer, initialState }) => {
  let currentState = initialState;
  const subscribers = [];
  return {
    dispatch: (action) => {
      const newState = rootReducer(currentState, action);
      currentState = newState;
      subscribers.forEach((sub) => sub(newState, action));
      return newState;
    },
    getState: () => currentState,
    subscribe: (sub) => {
      subscribers.push(sub);
      // unsubscribe
      return () => {
        let index = subscribers.indexOf(sub);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      };
    },
  };
};
